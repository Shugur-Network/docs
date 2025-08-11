---
sidebar_position: 1
---

# Installation Guide

This section provides detailed instructions for all supported installation methods. Choose the method that best fits your needs and environment.

## Installation Methods Overview

### 🚀 Quick Start (Recommended for Most Users)
- **[Quick Start](./quick-start)**: Use the automated script for a fast setup
- **Best for**: Users who want to get up and running quickly with minimal configuration
- **Time**: 5-10 minutes
- **Difficulty**: Easy

### 🐳 Docker Installations
- **[Docker Standalone](./docker-standalone)**: Manual setup for a single-node Docker deployment
- **[Docker Distributed](./docker-distributed)**: Manual setup for a multi-node, high-availability Docker deployment
- **Best for**: Users familiar with Docker who want containerized deployments
- **Time**: 15-30 minutes
- **Difficulty**: Medium

### ⚙️ Bare Metal Installation
- **[Bare Metal Installation](../bare-metal)**: Advanced installation directly on servers without Docker
- **Best for**: Users who need maximum performance, control, or can't use Docker
- **Time**: 45-90 minutes
- **Difficulty**: Advanced

## Choosing Your Installation Method

### For Development & Testing
- **Quick Start** or **Docker Standalone**
- Single server setup
- Minimal resource requirements

### For Small Production
- **Docker Standalone** or **Bare Metal**
- Single server with backup strategy
- Moderate traffic handling

### For Production & High Availability
- **Docker Distributed** or **Bare Metal**
- Multiple servers for redundancy
- High traffic and reliability requirements

### For Maximum Performance
- **Bare Metal Installation**
- Direct hardware access
- Custom optimization capabilities

## Prerequisites

Before installing, ensure your system meets the [Getting Started](../getting-started) requirements:

> **⚠️ Important**: Always test your installation in a staging environment before deploying to production. This helps identify configuration issues and ensures a smooth production deployment.

- **Operating System**: Ubuntu 22.04 LTS or newer (other Linux distributions may work)
- **CPU**: 2+ cores (4+ recommended for production)
- **RAM**: 4+ GB (8+ GB recommended for production)
- **Storage**: 20+ GB SSD (50+ GB recommended for production)
- **Network**: Stable internet connection

## Next Steps

1. **Review Requirements**: Check [Getting Started](../getting-started) for detailed system requirements
2. **Choose Method**: Select the installation method that fits your needs
3. **Follow Guide**: Use the specific installation guide for your chosen method
4. **Configure**: Customize your relay settings using [Configuration Guide](../configuration)
5. **Operate**: Learn about operations in [Performance](../performance) and [Troubleshooting](../troubleshooting)

## Need Help?

- **Issues**: Check [Troubleshooting](../troubleshooting) for common problems
- **Questions**: Open an issue on [GitHub](https://github.com/Shugur-Network/relay/issues)
- **Community**: Join discussions in the project repository

## Related Documentation

- **[Getting Started](../getting-started)**: Review prerequisites and system requirements
- **[Architecture Overview](../architecture)**: Understand the system design
- **[Configuration Guide](../configuration)**: Configure your relay after installation
- **[Performance Guide](../performance)**: Optimize for production workloads
- **[Troubleshooting Guide](../troubleshooting)**: Resolve common issues
- **[API Reference](../api)**: WebSocket and HTTP endpoint documentation
