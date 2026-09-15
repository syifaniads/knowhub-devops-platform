# Docker Swarm deployment

The original project requirement used **1 manager + 2 worker nodes**, and the manager was not supposed to run application tasks.

## 1. Initialize the manager

```bash
docker swarm init --advertise-addr <MANAGER_IP>
docker swarm join-token worker
```

Run the generated worker join command on both workers.

## 2. Keep the manager control-plane only

```bash
docker node update --availability drain <MANAGER_NODE>
docker node ls
```

## 3. Create secrets

Follow `../secrets/README.md`.

## 4. Authenticate to GHCR where required

Use an appropriately scoped token outside the repository. Do not put registry credentials in this file.

## 5. Deploy

From `infra/` on the manager:

```bash
docker stack deploy --with-registry-auth -c docker-stack.yml knowhub
docker stack services knowhub
docker stack ps knowhub
```

## 6. Validate

Check that application tasks are scheduled on worker nodes, the frontend can reach the API, the API can reach PostgreSQL, and Node Exporter is visible to Prometheus.

## Lab limitation

A single PostgreSQL task backed by a local volume is not a highly available database design. See `../../docs/PRODUCTION_HARDENING.md`.
