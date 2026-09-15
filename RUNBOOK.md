# Operations runbook

## Local validation

```bash
cp .env.example .env
docker compose -f infra/docker-compose.yml up --build -d
docker compose -f infra/docker-compose.yml ps
curl http://localhost:8080/health
curl http://localhost:8080/posts
```

Open `http://localhost:8081`, Prometheus on `:9090`, and Grafana on `:3000`.

## Common checks

```bash
docker compose -f infra/docker-compose.yml logs backend
docker compose -f infra/docker-compose.yml logs postgres
docker compose -f infra/docker-compose.yml logs prometheus
```

## Swarm

Follow `infra/swarm/DEPLOYMENT.md`, then inspect:

```bash
docker node ls
docker stack services knowhub
docker stack ps knowhub
docker service logs knowhub_backend
docker secret ls
```

## Recovery principle

Do not treat container restarts as database recovery. Back up PostgreSQL independently and test restores. For application releases, use immutable image tags/digests and keep the previous image available for rollback.
