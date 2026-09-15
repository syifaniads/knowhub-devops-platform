# Security & Secret Management

## Public-repository policy

Do not commit:

- GHCR/Firebase/PAT tokens,
- real PostgreSQL passwords or connection URLs,
- Docker Swarm join tokens,
- private keys,
- production `.env` files,
- historical cloud/server credentials.

## Runtime secrets

The final report moved sensitive database values toward Docker Secrets. The portfolio reference stack expects external secrets:

- `postgres_user`
- `postgres_password`
- `db_url`

Application code should read mounted secret files under `/run/secrets/` or use a startup wrapper that exports them only into the process environment.

## CI credentials

Prefer the repository-scoped `GITHUB_TOKEN` with `packages: write` for GHCR when policy permits. Use a PAT only when cross-repository/package rules require one, and keep it in GitHub Actions Secrets.

## Image security

The personal history contains an explicit security-scanning setup and `.trivyignore`. A production pipeline should improve on that by:

- generating an SBOM,
- scanning the built image,
- failing on a defined severity threshold with documented exceptions,
- signing images/attestations,
- pinning base images/digests where practical.

A vulnerability ignore file should include rationale and expiry, not silently suppress CVEs indefinitely.

## Network exposure

PostgreSQL should not be published to the host/Internet in production. Only required ingress ports should be exposed; application and monitoring services should be segmented appropriately.
