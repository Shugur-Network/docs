---
sidebar_position: 8
---

# Troubleshooting Guide

This guide helps resolve common issues when deploying and operating Shugur Relay.

## Common Issues

> **🔍 Troubleshooting Tip**: Always start by checking the logs. Most issues can be diagnosed by examining the application logs for error messages and stack traces.

### 1. Relay Won't Start

#### Symptoms

- Service fails to start
- Connection refused errors
- Immediate exit after startup

#### Diagnosis

```bash
# Check service status
sudo systemctl status shugur-relay

# View recent logs
sudo journalctl -u shugur-relay -n 50

# Check configuration
shugur-relay --config /path/to/config.yaml --validate
```

#### Common Causes

**Database Connection Issues**
- CockroachDB not running or unreachable
- Incorrect database configuration
- Certificate/authentication problems

**Port Conflicts**
- Another service using port 8080
- Firewall blocking required ports
- Permission issues binding to ports

**Configuration Errors**
- Invalid YAML syntax
- Missing required parameters
- Incorrect file paths

#### Solutions

```bash
# Fix database connection
sudo systemctl start cockroachdb
sudo systemctl enable cockroachdb

# Check port availability
sudo netstat -tlnp | grep :8080
sudo lsof -i :8080

# Validate configuration
yamllint /path/to/config.yaml
```

### 2. Database Connection Problems

#### Symptoms

- "Connection refused" errors
- "Authentication failed" messages
- Timeouts connecting to database

#### Diagnosis

```bash
# Test database connectivity
cockroach sql --certs-dir=/path/to/certs --host=localhost:26257

# Check database service
sudo systemctl status cockroachdb

# Verify certificates
ls -la /var/lib/cockroach/certs/
openssl x509 -in /var/lib/cockroach/certs/client.relay.crt -text -noout
```

#### Solutions

**Certificate Issues**
```bash
# Regenerate client certificates
sudo -u cockroach cockroach cert create-client relay \
  --certs-dir=/var/lib/cockroach/certs \
  --ca-key=/var/lib/cockroach/certs/ca.key

# Fix permissions
sudo chown cockroach:cockroach /var/lib/cockroach/certs/*
sudo chmod 600 /var/lib/cockroach/certs/*.key
```

**Database Not Initialized**
```bash
# Initialize cluster
sudo -u cockroach cockroach init \
  --certs-dir=/var/lib/cockroach/certs \
  --host=localhost:26257

# Create database and user
sudo -u cockroach cockroach sql \
  --certs-dir=/var/lib/cockroach/certs \
  --host=localhost:26257 \
  -e "CREATE DATABASE IF NOT EXISTS shugur; CREATE USER IF NOT EXISTS relay; GRANT ALL ON DATABASE shugur TO relay;"
```

### 3. High Memory Usage

#### Symptoms

- Out of memory errors
- System becoming unresponsive
- Frequent garbage collection

#### Diagnosis

```bash
# Check memory usage
free -h
ps aux | grep shugur-relay

# Monitor Go memory usage
curl http://localhost:6060/debug/pprof/heap > heap.pprof
go tool pprof heap.pprof
```

#### Solutions

```yaml
# Reduce cache sizes in config.yaml
RELAY:
  EVENT_CACHE_SIZE: 5000  # Reduce from default
  SEND_BUFFER_SIZE: 4096  # Reduce buffer size
```

```bash
# Set Go memory limits
export GOMEMLIMIT=1GiB
systemctl restart shugur-relay
```

### 4. Poor Performance

#### Symptoms

- Slow response times
- High CPU usage
- Connection timeouts

#### Diagnosis

```bash
# Monitor performance
top -p $(pgrep shugur-relay)
iostat -x 1 10

# Check database performance
cockroach sql --certs-dir=/path/to/certs -e "
SELECT query, count, avg_latency 
FROM crdb_internal.statement_statistics 
WHERE avg_latency > interval '100ms'
ORDER BY avg_latency DESC;"
```

#### Solutions

See the [Performance Guide](./performance) for detailed optimization recommendations.

### 5. WebSocket Connection Issues

#### Symptoms

- Clients can't connect
- Frequent disconnections
- "Connection reset" errors

#### Diagnosis

```bash
# Test WebSocket endpoint
wscat -c ws://localhost:8080

# Check connection limits
ss -tlnp | grep :8080
```

#### Solutions

```yaml
# Increase connection limits
RELAY:
  THROTTLING:
    MAX_CONNECTIONS: 2000  # Increase limit
    RATE_LIMIT:
      ENABLED: false  # Temporarily disable for testing
```

```bash
# Increase system limits
echo "* soft nofile 65536" >> /etc/security/limits.conf
echo "* hard nofile 65536" >> /etc/security/limits.conf
```

## Docker-Specific Issues

### Container Won't Start

```bash
# Check container logs
docker logs shugur-relay

# Inspect container
docker inspect shugur-relay

# Check resource limits
docker stats shugur-relay
```

### Database Connection in Docker

```bash
# Check network connectivity between containers
docker exec shugur-relay ping cockroach

# Verify service discovery
docker exec shugur-relay nslookup cockroach
```

### Volume Mount Issues

```bash
# Check volume permissions
docker exec shugur-relay ls -la /app/config/

# Fix ownership
docker exec shugur-relay chown -R app:app /app/config/
```

## Monitoring and Alerting

### Health Check Endpoints

```bash
# Check relay health
curl http://localhost:8080/api/stats

# Check database health
curl http://localhost:9090/health
```

### Log Analysis

```bash
# Search for errors
journalctl -u shugur-relay | grep -i error

# Monitor in real-time
tail -f /var/log/shugur-relay.log | jq '.'

# Analyze error patterns
grep "ERROR" /var/log/shugur-relay.log | awk '{print $4}' | sort | uniq -c
```

### Performance Monitoring

```bash
# Check resource usage
vmstat 1 10
iotop -ao

# Monitor network connections
netstat -an | grep :8080 | wc -l
```

## Performance Tuning

### Operating System

```bash
# Increase file descriptor limits
echo "* soft nofile 65536" >> /etc/security/limits.conf
echo "* hard nofile 65536" >> /etc/security/limits.conf

# Optimize network settings
echo "net.core.somaxconn = 65536" >> /etc/sysctl.conf
echo "net.ipv4.tcp_max_syn_backlog = 65536" >> /etc/sysctl.conf
sysctl -p
```

### Database Optimization

```sql
-- Increase cache size
SET CLUSTER SETTING kv.snapshot_rebalance.max_rate = '64MiB';
SET CLUSTER SETTING kv.snapshot_recovery.max_rate = '64MiB';

-- Optimize memory settings
SET CLUSTER SETTING sql.defaults.default_int_size = 4;
```

### Application Tuning

```yaml
# Optimize configuration
RELAY:
  EVENT_CACHE_SIZE: 20000
  SEND_BUFFER_SIZE: 16384
  THROTTLING:
    MAX_CONNECTIONS: 5000
    RATE_LIMIT:
      MAX_EVENTS_PER_SECOND: 50
```

## Logging and Debugging

### Enable Debug Logging

```yaml
LOGGING:
  LEVEL: debug
  FORMAT: json
  FILE: /var/log/shugur-relay-debug.log
```

### Structured Log Analysis

```bash
# Parse JSON logs
cat /var/log/shugur-relay.log | jq '.level' | sort | uniq -c

# Find specific errors
cat /var/log/shugur-relay.log | jq 'select(.level=="error")'

# Monitor real-time
tail -f /var/log/shugur-relay.log | jq 'select(.level=="warn" or .level=="error")'
```

### Profiling

```bash
# CPU profiling
go tool pprof http://localhost:6060/debug/pprof/profile?seconds=30

# Memory profiling
go tool pprof http://localhost:6060/debug/pprof/heap

# Goroutine analysis
go tool pprof http://localhost:6060/debug/pprof/goroutine
```

## Getting Help

### Information to Gather

When reporting issues, please include:

1. **Version Information**
   ```bash
   shugur-relay --version
   cockroach version
   ```

2. **System Information**
   ```bash
   uname -a
   free -h
   df -h
   ```

3. **Configuration** (remove sensitive data)
   ```bash
   cat config.yaml
   ```

4. **Logs** (recent relevant entries)
   ```bash
   journalctl -u shugur-relay -n 100 --no-pager
   ```

5. **Error Details**
   - Exact error messages
   - Steps to reproduce
   - Expected vs. actual behavior

### Support Channels

- **GitHub Issues**: [Shugur Network Relay Issues](https://github.com/Shugur-Network/relay/issues)
- **Documentation**: Check this troubleshooting guide and other docs
- **Community**: Join discussions in the project repository

### Before Reporting

1. **Search existing issues** for similar problems
2. **Check the logs** for error messages
3. **Try the solutions** in this guide
4. **Test with minimal configuration** to isolate the problem
5. **Gather relevant information** as listed above

## Related Documentation

- **[Installation Guide](./installation/installation)**: Choose your deployment method
- **[Architecture Overview](./architecture)**: Understand the system design
- **[Configuration Guide](./configuration)**: Configure your relay settings
- **[Performance Guide](./performance)**: Optimize for production workloads
- **[API Reference](./api)**: WebSocket and HTTP endpoint documentation
