---
sidebar_position: 8
---

# Reliability & Status

## Service Level Objectives (SLO)

- **Uptime:** 99.9% monthly availability target
- **Response time:** Under 100ms for WebSocket connections
- **Event delivery:** Under 1s latency for real-time events
- **Recovery time:** Under 15 minutes for most incidents

## Infrastructure

### Multi-Region Deployment

- **Primary:** US-East-1 (Virginia)
- **Secondary:** EU-Central-1 (Frankfurt)
- **Tertiary:** AP-Southeast-1 (Singapore)

### High Availability Features

- **Load balancing** across multiple server instances
- **Automatic failover** for database connections
- **Health checks** every 30 seconds
- **Circuit breakers** for upstream services

## Monitoring

### Real-Time Metrics

- Connection count and health
- Message throughput and latency
- Storage performance and capacity
- Network quality indicators

### Alerting

- **Instant alerts** for service degradation
- **Escalation policies** for critical incidents
- **Status page** updates within 2 minutes
- **Post-incident** analysis and reports

## Data Protection

### Backup Strategy

- **Continuous replication** to secondary regions
- **Daily snapshots** with 30-day retention
- **Point-in-time recovery** capability
- **Encrypted storage** at rest and in transit

### Security Measures

- **TLS 1.3** encryption for all connections
- **Rate limiting** to prevent abuse
- **DDoS protection** at multiple layers
- **Regular security audits** and updates

## Status Page

Visit [status.relay.shugur.net](https://status.relay.shugur.net) for:

- **Real-time status** of all services
- **Incident history** and resolution details
- **Maintenance windows** and scheduled updates
- **Performance metrics** and trends

## Contact for Issues

If you experience problems:

1. Check the [status page](https://status.relay.shugur.net)
2. Review our [troubleshooting guide](/docs/getting-started#troubleshooting)
3. Contact support: [contact@shugur.com](mailto:contact@shugur.com)

## Changelog

For detailed service updates, see our [changelog](/docs/changelog).
