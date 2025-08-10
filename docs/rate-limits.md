---
sidebar_position: 5
---

# Rate Limits & Fair Use

These limits ensure reliable service for all users.

## Connection Limits

- **Connections per IP:** 3 (soft), 10 (hard)
- **Connection duration:** No limit for active connections
- **Reconnection backoff:** Exponential (1s, 2s, 4s, 8s, ...)

## Message Limits

- **Messages per minute per connection:** 120
- **Event size limit:** 64 KB
- **Max active subscriptions per connection:** 5
- **Max filters per REQ:** 10

## Storage & Retention

- **Event retention:** Best effort, no guarantees
- **Max events per pubkey:** 1000 recent events
- **Old event cleanup:** Events older than 30 days may be pruned

## Fair Use Guidelines

### ✅ Encouraged Usage
- Real-time messaging applications
- Social feeds and timeline clients
- Moderate bot activity
- Development and testing

### ⚠️ Monitored Usage
- High-frequency publishing (>10 events/minute)
- Large file attachments via NIP-94
- Automated tools and scrapers

### ❌ Prohibited
- Spam or malicious content
- DoS attacks or abuse
- Commercial data mining without permission
- Content that violates applicable laws

## Rate Limit Response

When limits are exceeded:
- WebSocket may be temporarily throttled
- `NOTICE` messages explain the issue
- Persistent abuse results in IP blocking

## Enterprise Usage

Need higher limits? [Contact us](mailto:hello@shugur.com) for custom arrangements.
