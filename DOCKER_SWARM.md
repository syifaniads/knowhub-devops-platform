# Docker Swarm Deployment

## Verified topology

The final project required and documented a minimum cluster of:

- **1 manager node**
- **2 worker nodes**

The report also states that the manager must not run workload tasks.

## Portfolio reference policy

`infra/docker-stack.portfolio.yml` therefore adds explicit worker placement constraints to services. The reference stack also uses:

- a named custom overlay network,
- external Docker Secrets,
- Docker Config for Prometheus,
- persistent volumes for PostgreSQL and Grafana,
- replicated application services,
- rolling-update and restart policies.

## Why custom overlay networking matters

An explicit overlay network gives Swarm services DNS-based discovery across nodes while avoiding accidental dependence on an automatically generated default stack network. A real production deployment would normally separate public-facing and data-plane networks further.

## Replicas

The retained final configuration shows the backend application service with `replicas: 3`. This demonstrates application-tier scale-out, but it should not be confused with end-to-end HA because PostgreSQL remained single-instance.

## Manager scheduling

Two valid ways to prevent workloads on a manager are:

1. set manager availability to `drain`; or
2. add service placement constraints such as `node.role == worker`.

The portfolio reference stack uses placement constraints so the rule is visible in versioned configuration.

## Persistence caveat

A named Docker volume on Swarm is local to the node unless backed by a shared/network storage driver. Therefore `pgdata` provides persistence across container recreation on the same node, but not transparent database failover to another worker.

## Safer deployment sequence

```bash
# initialize once on the manager
docker swarm init --advertise-addr <MANAGER_IP>

# join both workers using the generated worker token
# then verify
docker node ls

# create external secrets
printf '%s' "$POSTGRES_USER" | docker secret create postgres_user -
printf '%s' "$POSTGRES_PASSWORD" | docker secret create postgres_password -
printf '%s' "$DATABASE_URL" | docker secret create db_url -

# deploy
docker stack deploy -c infra/docker-stack.portfolio.yml knowhub

# inspect
docker stack services knowhub
docker service ps knowhub_backend
```

Do not store the worker token or real secret values in Git.
