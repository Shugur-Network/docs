---
sidebar_position: 1
---

# Shugur Relay

A reliable, developer‑friendly Nostr relay with sensible defaults and transparent limits.

- **Service endpoint:** `wss://relay.shugur.net`
- **Status:** https://status.relay.shugur.net
- **Source code:** https://github.com/Shugur-Network/relay

## What you get

- ✅ Stable WebSocket endpoint
- ✅ Clearly defined policies & limits
- ✅ Public status and incident history
- ✅ Self‑hosting guide
- ✅ Production-ready infrastructure
- ✅ Developer-first approach

## Quick Connect

```javascript
const ws = new WebSocket("wss://relay.shugur.net");
ws.onopen = () => {
  console.log("Connected to Shugur Relay");
};
```

## Getting Help

- 📖 [Getting Started Guide](./getting-started)
- 🔧 [Self-Hosting Instructions](./self-hosting) 
- 📊 [Live Status Page](https://status.relay.shugur.net)
- 💬 [GitHub Issues](https://github.com/Shugur-Network/relay/issues)
