---
sidebar_position: 7
---

# Self-Hosting

Run your own instance of Shugur Relay.

## Quick Start (Docker)

```bash
# Pull and run the relay
docker run -d \
  --name shugur-relay \
  -p 4848:4848 \
  -e RELAY_NAME="My Relay" \
  -e RELAY_DESCRIPTION="My personal Nostr relay" \
  ghcr.io/shugur-network/relay:latest
```

## Docker Compose

```yaml
version: '3.9'
services:
  relay:
    image: ghcr.io/shugur-network/relay:latest
    restart: unless-stopped
    ports:
      - "4848:4848"
    environment:
      - RELAY_NAME=My Relay
      - RELAY_DESCRIPTION=My personal Nostr relay
      - RELAY_LOG_LEVEL=info
      - RELAY_BIND=0.0.0.0:4848
    volumes:
      - ./data:/app/data
      - ./config:/app/config
```

## Configuration

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `RELAY_NAME` | `"Shugur Relay"` | Relay name in NIP-11 |
| `RELAY_DESCRIPTION` | `"A reliable Nostr relay"` | Relay description |
| `RELAY_BIND` | `0.0.0.0:4848` | Bind address and port |
| `RELAY_LOG_LEVEL` | `info` | Log level (debug, info, warn, error) |
| `DATABASE_URL` | `sqlite:data.db` | Database connection string |

### Configuration File

```yaml
# config/relay.yml
relay:
  name: "My Relay"
  description: "My personal Nostr relay"
  
limits:
  max_connections: 1000
  max_subscriptions_per_connection: 10
  max_message_rate: 120 # per minute
  max_event_size: 65536 # bytes

database:
  type: sqlite
  path: data/relay.db
  
logging:
  level: info
  format: json
```

## Reverse Proxy (Nginx)

```nginx
server {
    listen 443 ssl http2;
    server_name relay.yourdomain.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    location / {
        proxy_pass http://127.0.0.1:4848;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Production Deployment

### System Requirements
- **RAM:** 512MB minimum, 2GB recommended
- **Storage:** 10GB minimum for database
- **Network:** Stable internet connection
- **SSL:** Required for WebSocket security

### Scaling Options
- **Horizontal:** Multiple relay instances with load balancing
- **Database:** PostgreSQL for larger deployments
- **Caching:** Redis for improved performance

### Monitoring
- Enable health checks on `/health`
- Monitor WebSocket connection counts
- Track database size and performance
- Set up log aggregation

## Building from Source

```bash
# Clone repository
git clone https://github.com/Shugur-Network/relay.git
cd relay

# Build with Go
go build -o relay ./cmd/relay

# Run
./relay --config config.yml
```

## Troubleshooting

### Common Issues

**Connection refused**
- Check firewall settings
- Verify port binding
- Ensure SSL certificates are valid

**High memory usage**
- Adjust connection limits
- Enable event pruning
- Check for memory leaks

**Database errors**
- Verify database permissions
- Check disk space
- Monitor connection pool

### Getting Help

- [GitHub Issues](https://github.com/Shugur-Network/relay/issues)
- [Discord Community](https://discord.gg/shugur)
- [Documentation](https://docs.relay.shugur.net)
