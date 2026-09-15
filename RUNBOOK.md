# Deployment Runbook

This runbook is a sanitized portfolio reference, not a record of historical credentials.

## 1. Build locally

```bash
npm ci
npm run build
docker build -t knowhub-frontend:local .
```

## 2. Local frontend smoke test

```bash
docker run --rm -p 8080:80 knowhub-frontend:local
curl -I http://localhost:8080
```

## 3. Prepare Swarm

On the manager:

```bash
docker swarm init --advertise-addr <MANAGER_IP>
docker node ls
```

Join two workers using the generated worker token, then verify both are `Ready`.

For strict manager-only control-plane operation:

```bash
docker node update --availability drain <MANAGER_NODE>
```

The portfolio stack also applies worker placement constraints.

## 4. Create external secrets

```bash
printf '%s' "$POSTGRES_USER" | docker secret create postgres_user -
printf '%s' "$POSTGRES_PASSWORD" | docker secret create postgres_password -
printf '%s' "$DATABASE_URL" | docker secret create db_url -
```

## 5. Deploy

```bash
export FRONTEND_IMAGE=<registry>/<frontend>:<immutable-tag>
export BACKEND_IMAGE=<registry>/<backend>:<immutable-tag>
docker stack deploy -c infra/docker-stack.portfolio.yml knowhub
```

## 6. Verify

```bash
docker stack services knowhub
docker stack ps knowhub
docker service ps knowhub_backend
docker service logs --tail 100 knowhub_backend
```

Validate:

- desired replicas equal running replicas,
- frontend can reach backend,
- backend can reach PostgreSQL,
- Prometheus target is healthy,
- Grafana can query Prometheus.

## 7. Rollback

With versioned image tags and Swarm update policy:

```bash
docker service rollback knowhub_backend
```

A production runbook should define rollback triggers and database-migration compatibility before deployment.
