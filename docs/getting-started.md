---
sidebar_position: 2
---

# Getting Started

## Connect

```javascript
const ws = new WebSocket("wss://relay.shugur.net");
ws.onopen = () => ws.send(JSON.stringify(["REQ", "sub-1", { kinds: [1], limit: 1 }]));
ws.onmessage = (e) => console.log(e.data);
```

## Publish an Event

```javascript
const note = [
  "EVENT",
  {
    kind: 1,
    created_at: Math.floor(Date.now()/1000),
    tags: [],
    content: "hello from Shugur Relay",
    pubkey: "<hex pubkey>",
    id: "<event id>",
    sig: "<signature>"
  }
];
ws.send(JSON.stringify(note));
```

## Subscribe to Events

```javascript
// Subscribe to recent text notes
const subscription = [
  "REQ", 
  "my-subscription-id",
  {
    kinds: [1],
    limit: 10
  }
];
ws.send(JSON.stringify(subscription));
```

## Close Subscription

```javascript
const close = ["CLOSE", "my-subscription-id"];
ws.send(JSON.stringify(close));
```

## Libraries & Tools

### JavaScript/TypeScript
- [nostr-tools](https://github.com/nbd-wtf/nostr-tools) - Complete Nostr library
- [nostr-relay-pool](https://github.com/adamritter/nostr-relay-pool) - Connection pool

### Python
- [python-nostr](https://github.com/jeffthibault/python-nostr) - Python client

### Go
- [go-nostr](https://github.com/nbd-wtf/go-nostr) - Go implementation

:::tip
See **Reference → Endpoints** for full message formats and protocol details.
:::
