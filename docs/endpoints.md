---
sidebar_position: 3
---

# Endpoints & Message Flow

## WebSocket Endpoint

- **Primary:** `wss://relay.shugur.net`
- **Protocol:** WebSocket over TLS
- **Port:** 443 (standard HTTPS)

## Nostr Protocol Messages

This relay implements standard Nostr message types:

### Client to Relay

- `EVENT` - Publish an event
- `REQ` - Request events 
- `CLOSE` - Close a subscription
- `COUNT` - Count matching events

### Relay to Client

- `EVENT` - Event data
- `EOSE` - End of stored events
- `NOTICE` - Human-readable message
- `OK` - Command result

## Connection Info

```javascript
// Health check endpoint (HTTP)
fetch('https://relay.shugur.net/.well-known/nostr.json')
  .then(r => r.json())
  .then(info => console.log(info));
```

## Rate Limiting

Connections are subject to rate limiting. See [Rate Limits](./rate-limits) for details.
