---
sidebar_position: 10
---

# Changelog

All notable changes to Shugur Relay will be documented here.

## [0.2.0] - 2025-08-10

### 🎉 Added
- Comprehensive documentation site
- Self-hosting guides and Docker images
- Rate limiting with configurable thresholds
- Enhanced logging and monitoring
- NIP-11 relay information document
- Health check endpoints

### 🔧 Improved  
- WebSocket connection stability
- Event validation and error handling
- Database query performance
- Memory usage optimization

### 🐛 Fixed
- Event deduplication edge cases
- Connection timeout handling
- SSL certificate validation

## [0.1.0] - 2025-07-15

### 🚀 Initial Release
- Core Nostr relay functionality
- WebSocket server implementation
- SQLite database backend
- Basic rate limiting
- Docker containerization
- Production deployment to `relay.shugur.net`

### ✅ Supported NIPs
- NIP-01: Basic protocol flow
- NIP-11: Relay information document  
- NIP-15: End of Stored Events (EOSE)
- NIP-20: Command results (OK)

---

## Upcoming Releases

### [0.3.0] - Target: Q4 2025
- NIP-42 authentication support
- Enhanced search capabilities
- Multi-region deployment
- Performance improvements

### [0.4.0] - Target: Q1 2026
- NIP-28 public chat support
- Advanced spam filtering
- Metrics dashboard
- SDK releases

---

## Release Notes Format

We follow [Semantic Versioning](https://semver.org/):
- **MAJOR** version for incompatible API changes
- **MINOR** version for backwards-compatible functionality
- **PATCH** version for backwards-compatible bug fixes

### Change Categories
- 🎉 **Added** - New features
- 🔧 **Improved** - Enhanced existing features  
- 🐛 **Fixed** - Bug fixes
- ⚠️ **Deprecated** - Features being phased out
- �� **Removed** - Removed features
- 🔒 **Security** - Security-related changes

---

## Stay Updated

- **GitHub Releases:** [Latest releases](https://github.com/Shugur-Network/relay/releases)
- **Status Page:** [Service updates](https://status.relay.shugur.net)
- **RSS Feed:** Subscribe to release notifications
- **Discord:** [#announcements](https://discord.gg/shugur)
