---
sidebar_position: 3
---

# Manual Installation: Docker Standalone

This method is for setting up a **single-node** Shugur Relay using Docker. It's ideal for development, testing, or small-scale production environments.

## Step 1: Prepare Your Server

1. Connect to your server.
2. Create a directory for your relay and navigate into it:

    ```bash
    mkdir ~/shugur-relay && cd ~/shugur-relay
    ```

## Step 2: Download Configuration Files

Download the `docker-compose.standalone.yml` and a default `config.yaml` file:

```bash
curl -O https://github.com/Shugur-Network/relay/raw/main/docker/compose/docker-compose.standalone.yml
curl -O https://github.com/Shugur-Network/relay/raw/main/config/development.yaml
mv development.yaml config.yaml
```

## Step 3: Customize Your Configuration

Open `config.yaml` with a text editor to adjust settings like the relay name, description, and retention policies.

```bash
nano config.yaml
```

## Step 4: Start the Services

Use Docker Compose to start the services:

```bash
docker-compose -f docker-compose.standalone.yml up -d
```

## Step 5: Verify Installation

Once started, you can access:

- **Relay Dashboard**: `http://your-server:8080`
- **CockroachDB Admin UI**: `http://your-server:9090`

## Maintenance

To stop the services:

```bash
docker-compose -f docker-compose.standalone.yml down
```

To update to a newer version:

```bash
docker-compose -f docker-compose.standalone.yml pull
docker-compose -f docker-compose.standalone.yml up -d
```
