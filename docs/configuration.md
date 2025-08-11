---
sidebar_position: 6
---

# Configuration Parameters

Shugur Relay can be configured via a YAML file (`config.yaml`) or through environment variables.

- **YAML file**: By default, the application looks for a `config.yaml` in the current directory. You can specify a different path using the `--config` flag when running the application.
- **Environment Variables**: All parameters can be set using environment variables. They must be prefixed with `SHUGUR_`, and nested keys are separated by an underscore. For example, `RELAY.NAME` becomes `SHUGUR_RELAY_NAME`, and `DATABASE.SERVER` becomes `SHUGUR_DATABASE_SERVER`.

**Note**: Some Docker deployment scripts may use simplified environment variable names (like `SHUGUR_DB_HOST` or `SHUGUR_LOG_LEVEL`) for convenience. However, the canonical environment variables documented below are what the application actually reads.

The order of precedence is: **Environment Variables > Configuration File > Defaults**.

---

## `LOGGING`

Controls the logging output of the relay.

| YAML Key | Environment Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| `LEVEL` | `SHUGUR_LOGGING_LEVEL` | The minimum level of logs to output. Options: `debug`, `info`, `warn`, `error`, `fatal`. | `debug` |
| `FILE` | `SHUGUR_LOGGING_FILE` | The path to a file where logs should be written. If empty, logs are written to standard output. | (empty) |
| `FORMAT` | `SHUGUR_LOGGING_FORMAT` | The format of the logs. Options: `console` (human-readable) or `json` (machine-readable). | `console` |
| `MAX_SIZE` | `SHUGUR_LOGGING_MAX_SIZE` | The maximum size in megabytes of the log file before it gets rotated. | `20` |
| `MAX_BACKUPS` | `SHUGUR_LOGGING_MAX_BACKUPS` | The maximum number of old log files to retain. | `10` |
| `MAX_AGE` | `SHUGUR_LOGGING_MAX_AGE` | The maximum number of days to retain old log files. | `14` |

---

## `METRICS`

Configuration for Prometheus metrics collection.

| YAML Key | Environment Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| `ENABLED` | `SHUGUR_METRICS_ENABLED` | Whether to enable metrics collection. | `true` |
| `PORT` | `SHUGUR_METRICS_PORT` | The port on which to expose metrics endpoint. | `2112` |

---

## `DATABASE`

Database connection configuration for CockroachDB.

| YAML Key | Environment Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| `SERVER` | `SHUGUR_DATABASE_SERVER` | The hostname or IP address of the CockroachDB server. | `localhost` |
| `PORT` | `SHUGUR_DATABASE_PORT` | The port number of the CockroachDB server. | `26257` |

The application automatically constructs the database connection string based on these parameters and detects whether to use secure (TLS) or insecure connections based on the presence of certificate files.

For production deployments, ensure proper certificates are in place for secure connections. See [Bare Metal Installation](./bare-metal) for certificate setup details.

> **🔗 Related**: See [Installation Guide](./installation/installation) for setup instructions and [Performance](./performance) for database optimization tips.

---

## `RELAY`

Core relay configuration parameters.

| YAML Key | Environment Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| `NAME` | `SHUGUR_RELAY_NAME` | The name of your relay, shown to clients. | `"Shugur Relay"` |
| `DESCRIPTION` | `SHUGUR_RELAY_DESCRIPTION` | A brief description of your relay. | `"A Nostr relay powered by Shugur"` |
| `CONTACT` | `SHUGUR_RELAY_CONTACT` | Contact information for the relay operator. | `""` |
| `ICON` | `SHUGUR_RELAY_ICON` | URL to an icon image for your relay. | `""` |
| `BANNER` | `SHUGUR_RELAY_BANNER` | URL to a banner image for your relay. | `""` |
| `WS_ADDR` | `SHUGUR_RELAY_WS_ADDR` | The address and port to bind the WebSocket server. | `":8080"` |
| `PUBLIC_URL` | `SHUGUR_RELAY_PUBLIC_URL` | The public WebSocket URL clients should use to connect. | `"ws://localhost:8080"` |
| `EVENT_CACHE_SIZE` | `SHUGUR_RELAY_EVENT_CACHE_SIZE` | Number of recent events to keep in memory cache. | `10000` |
| `SEND_BUFFER_SIZE` | `SHUGUR_RELAY_SEND_BUFFER_SIZE` | WebSocket send buffer size in bytes. | `8192` |
| `WRITE_TIMEOUT` | `SHUGUR_RELAY_WRITE_TIMEOUT` | Timeout for WebSocket writes. | `60s` |

### Throttling Configuration

| YAML Key | Environment Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| `THROTTLING.MAX_CONTENT_LENGTH` | `SHUGUR_RELAY_THROTTLING_MAX_CONTENT_LENGTH` | Maximum content length for events in bytes. | `8192` |
| `THROTTLING.MAX_CONNECTIONS` | `SHUGUR_RELAY_THROTTLING_MAX_CONNECTIONS` | Maximum concurrent connections allowed. | `1000` |
| `THROTTLING.BAN_THRESHOLD` | `SHUGUR_RELAY_THROTTLING_BAN_THRESHOLD` | Number of violations before banning a client. | `10` |
| `THROTTLING.BAN_DURATION` | `SHUGUR_RELAY_THROTTLING_BAN_DURATION` | Duration of bans in seconds. | `300` |

### Rate Limiting Configuration

| YAML Key | Environment Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| `THROTTLING.RATE_LIMIT.ENABLED` | `SHUGUR_RELAY_THROTTLING_RATE_LIMIT_ENABLED` | Whether to enable rate limiting. | `true` |
| `THROTTLING.RATE_LIMIT.MAX_EVENTS_PER_SECOND` | `SHUGUR_RELAY_THROTTLING_RATE_LIMIT_MAX_EVENTS_PER_SECOND` | Maximum events per second per client. | `10` |
| `THROTTLING.RATE_LIMIT.MAX_REQUESTS_PER_SECOND` | `SHUGUR_RELAY_THROTTLING_RATE_LIMIT_MAX_REQUESTS_PER_SECOND` | Maximum requests per second per client. | `20` |
| `THROTTLING.RATE_LIMIT.BURST_SIZE` | `SHUGUR_RELAY_THROTTLING_RATE_LIMIT_BURST_SIZE` | Burst size for rate limiting. | `5` |
| `THROTTLING.RATE_LIMIT.PROGRESSIVE_BAN` | `SHUGUR_RELAY_THROTTLING_RATE_LIMIT_PROGRESSIVE_BAN` | Whether to enable progressive banning. | `true` |
| `THROTTLING.RATE_LIMIT.MAX_BAN_DURATION` | `SHUGUR_RELAY_THROTTLING_RATE_LIMIT_MAX_BAN_DURATION` | Maximum ban duration. | `24h` |

---

## `RELAY_POLICY`

Access control and content policies.

### Blacklist Configuration

| YAML Key | Environment Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| `BLACKLIST.PUBKEYS` | `SHUGUR_RELAY_POLICY_BLACKLIST_PUBKEYS` | List of banned public keys (hex format). | `[]` |

### Whitelist Configuration

| YAML Key | Environment Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| `WHITELIST.PUBKEYS` | `SHUGUR_RELAY_POLICY_WHITELIST_PUBKEYS` | List of allowed public keys (hex format). If set, only these keys can publish. | `[]` |

---

## Example Configuration

```yaml
GENERAL: {}

LOGGING:
  LEVEL: info
  FILE: /var/log/shugur-relay.log
  FORMAT: json

METRICS:
  ENABLED: true
  PORT: 2112

DATABASE:
  SERVER: localhost
  PORT: 26257

RELAY:
  NAME: "My Nostr Relay"
  DESCRIPTION: "A community Nostr relay"
  CONTACT: "admin@example.com"
  WS_ADDR: ":8080"
  PUBLIC_URL: "wss://relay.example.com"
  THROTTLING:
    MAX_CONNECTIONS: 1000
    RATE_LIMIT:
      ENABLED: true
      MAX_EVENTS_PER_SECOND: 10

RELAY_POLICY:
  BLACKLIST:
    PUBKEYS: []
  WHITELIST:
    PUBKEYS: []
```

## Related Documentation

- **[Installation Guide](./installation/installation)**: Setup instructions for different deployment methods
- **[Architecture Overview](./architecture)**: Understand the system design
- **[Performance Guide](./performance)**: Optimize configuration for production workloads
- **[Troubleshooting Guide](./troubleshooting)**: Resolve configuration issues
- **[API Reference](./api)**: WebSocket and HTTP endpoint documentation
