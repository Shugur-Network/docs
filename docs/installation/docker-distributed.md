---
sidebar_position: 4
---

# Manual Installation: Docker Distributed

This method provides a step-by-step guide for setting up a **multi-node, distributed** relay with Docker. It mirrors the functionality of the automated script but grants you full control over every aspect of the setup. This is ideal for production environments where you need to manage the configuration manually.

## Overview

The process is divided into three main parts:

1. **Local Certificate Generation**: You will act as the Certificate Authority (CA) on your local machine, creating all necessary TLS certificates for the cluster.
2. **Per-Node Configuration**: You will connect to each of your servers, create the required directory structure, and copy over the certificates and configuration files.
3. **Cluster Bootstrap**: You will start the services in a specific order to initialize the distributed database and bring the entire relay cluster online.

---

## Part 1: Certificate Generation (On Your Local Machine)

First, you need to generate TLS certificates for secure communication between the CockroachDB nodes and for the relay to connect securely to the database.

### 1. Prepare the Workspace

Create a dedicated directory on your local computer to hold the certificates.

```bash
mkdir -p shugur-certs/safe-dir
cd shugur-certs
```

### 2. Create the Certificate Authority (CA)

The CA will be used to sign all other certificates.

```bash
cockroach cert create-ca \
    --certs-dir=. \
    --ca-key=./ca.key
```

### 3. Create Node Certificates

For each server in your cluster, create a node certificate. Replace `<node1_ip>`, `<node2_ip>`, etc., with the actual IP addresses of your servers.

```bash
# For each node, create a certificate
cockroach cert create-node \
    localhost \
    <node1_ip> \
    <node2_ip> \
    <node3_ip> \
    --certs-dir=. \
    --ca-key=./ca.key
```

### 4. Create Client Certificates

Create certificates for the relay and administrative access:

```bash
# For the relay application
cockroach cert create-client \
    relay \
    --certs-dir=. \
    --ca-key=./ca.key

# For administrative access
cockroach cert create-client \
    root \
    --certs-dir=. \
    --ca-key=./ca.key
```

---

## Part 2: Per-Node Setup

For each server in your cluster, perform the following steps:

### 1. Connect to Your Server

```bash
ssh user@<server_ip>
```

### 2. Create Directory Structure

```bash
mkdir -p ~/shugur-relay/{certs,config,data/cockroach}
cd ~/shugur-relay
```

### 3. Copy Certificates

Copy the certificates from your local machine to each server:

```bash
# On your local machine (separate terminal)
scp shugur-certs/*.crt shugur-certs/*.key user@<server_ip>:~/shugur-relay/certs/
```

### 4. Download Configuration Files

```bash
# Download the distributed Docker Compose file
curl -O https://github.com/Shugur-Network/relay/raw/main/docker/compose/docker-compose.distributed.yml

# Download and customize the configuration
curl -O https://github.com/Shugur-Network/relay/raw/main/config/production.yaml
mv production.yaml config.yaml
```

### 5. Customize Configuration

Edit the configuration file for your environment:

```bash
nano config.yaml
```

---

## Part 3: Cluster Deployment and Initialization

This part requires careful sequencing.

### 1. Start the First Node

On your first server, start only the database:

```bash
docker-compose -f docker-compose.distributed.yml up -d cockroach
```

### 2. Initialize the Cluster

Wait for the database to start, then initialize the cluster:

```bash
docker exec -it shugur-cockroach cockroach init --certs-dir=/cockroach/certs --host=localhost:26257
```

### 3. Start Remaining Database Nodes

On each remaining server, start the database:

```bash
docker-compose -f docker-compose.distributed.yml up -d cockroach
```

### 4. Create Database and User

On any node, create the relay database and user:

```bash
docker exec -it shugur-cockroach cockroach sql --certs-dir=/cockroach/certs --host=localhost:26257 -e "
CREATE DATABASE IF NOT EXISTS shugur;
CREATE USER IF NOT EXISTS relay;
GRANT ALL ON DATABASE shugur TO relay;
"
```

### 5. Start All Services

Finally, start all services on each node:

```bash
docker-compose -f docker-compose.distributed.yml up -d
```

## Verification

Check that all services are running:

```bash
docker-compose -f docker-compose.distributed.yml ps
```

Access the services:
- **Relay Dashboard**: `http://any-server:8080`
- **CockroachDB Admin UI**: `http://any-server:9090`

## Maintenance

### Updates

To update the relay:

```bash
docker-compose -f docker-compose.distributed.yml pull relay
docker-compose -f docker-compose.distributed.yml up -d relay
```

### Monitoring

Monitor the cluster health through the CockroachDB admin interface at port 9090 on any node.
