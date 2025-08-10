---
sidebar_position: 8
---

# Reliability & Status

## Service Level Objectives (SLO)

- **Uptime:** 99.9% monthly availability target
- **Response time:** <100ms for WebSocket connections
- **Event delivery:** <1s latency for real-time events
- **Recovery time:** <15 minutes for most incidents

## Infrastructure

### Architecture
- **Load balancing:** Multiple relay instances
- **Database:** Replicated PostgreSQL with automatic failover
- **Monitoring:** Real-time health checks and alerting
- **Backup:** Daily automated backups with point-in-time recovery

### Geographic Distribution
- **Primary:** US East (Virginia)
- **Secondary:** US West (Oregon) - *Coming Q4 2025*
- **CDN:** Cloudflare for static assets

## Status Monitoring

### Public Status Page
🔗 **[status.relay.shugur.net](https://status.relay.shugur.net)**

Real-time monitoring of:
- WebSocket endpoint availability
- Connection success rates
- Event publishing latency
- Database performance

### Incident Communication
- **Status updates:** Posted to status page within 5 minutes
- **Root cause analysis:** Published within 24 hours
- **Postmortems:** For all major incidents

### Metrics Dashboard
�� **[metrics.relay.shugur.net](https://metrics.relay.shugur.net)** *(Coming Soon)*

Public visibility into:
- Active connections
- Events per second
- Regional performance
- Historical uptime

## Incident Response

### Classification
- **P0 (Critical):** Service completely unavailable
- **P1 (High):** Significant performance degradation
- **P2 (Medium):** Limited feature impact
- **P3 (Low):** Minor issues or planned maintenance

### Response Times
- **P0:** <15 minutes initial response
- **P1:** <1 hour initial response
- **P2:** <4 hours initial response
- **P3:** <24 hours initial response

## Planned Maintenance

- **Schedule:** Sundays 06:00-08:00 UTC
- **Frequency:** Monthly or as needed
- **Notice:** 48-hour advance notification
- **Duration:** Typically <30 minutes
- **Impact:** Brief connection resets, automatic reconnection

## Historical Performance

### Recent Uptime
- **Last 30 days:** 99.95%
- **Last 90 days:** 99.92%
- **Last 12 months:** 99.89%

### Major Incidents (2025)
- **Aug 1:** Database failover - 12 minutes downtime
- **Jun 15:** Network connectivity - 8 minutes degraded
- **May 3:** Load balancer update - 5 minutes maintenance

## Reliability Commitments

### What we monitor
✅ WebSocket connectivity  
✅ Event publishing success  
✅ Database availability  
✅ SSL certificate validity  
✅ DNS resolution  

### What we guarantee
- Best-effort event delivery
- Transparent incident communication
- Proactive monitoring and alerting
- Regular security updates

### What we don't guarantee
- Permanent event storage
- 100% uptime (force majeure events)
- Service availability during planned maintenance
- Data recovery for user errors

## Contact for Issues

- **Immediate issues:** [Status page](https://status.relay.shugur.net)
- **Service reports:** hello@shugur.com
- **Technical support:** [GitHub Issues](https://github.com/Shugur-Network/relay/issues)
