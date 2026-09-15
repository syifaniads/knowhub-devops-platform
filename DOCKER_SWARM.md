# Docker Swarm Deployment

## Verified project topology

The final project required and documented:

- **1 manager node**
- **2 worker nodes**
- application tasks not scheduled on the manager
- Docker Stack deployment
- a custom overlay network
- persistent volumes
- Docker Config and Docker Secret usage
- Prometheus/Grafana monitoring

## Canonical stack

The runnable portfolio stack is `infra/docker-stack.yml`. It uses:

- `node.role == worker` placement constraints,
- `internal-net` as an explicit overlay network,
- external secrets `postgres_user`, `postgres_password`, and `db_url`,
- Prometheus configuration as Docker Config,
- `pgdata` and `grafana_data` volumes,
- two frontend replicas,
- three backend replicas,
- global Node Exporter on workers,
- rolling update with rollback on application services.

## Manager scheduling

Keep the manager control-plane only:

```bash
docker node update --availability drain <MANAGER_NODE>
```

Placement constraints in the versioned stack add a second visible guardrail.

## Deployment

```bash
# manager
docker swarm init --advertise-addr <MANAGER_IP>
docker swarm join-token worker

# after both workers join
docker node update --availability drain <MANAGER_NODE>
docker node ls

# create external secrets; see infra/secrets/README.md

cd infra
docker stack deploy --with-registry-auth -c docker-stack.yml knowhub

docker stack services knowhub
docker stack ps knowhub
```

## Persistence caveat

A named local Docker volume is attached to a node, not magically replicated across Swarm workers. Therefore a single PostgreSQL task with `pgdata` is persistent but **not highly available**. A production design needs managed PostgreSQL or a tested database replication/failover/storage strategy.

See `infra/swarm/DEPLOYMENT.md` for the operational runbook.
