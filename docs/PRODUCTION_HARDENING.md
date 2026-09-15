# Production Hardening Review

The coursework demonstrates core DevOps mechanics. A senior-engineering review should also identify what would change before production.

## CI/CD

- Add unit/integration tests before publish.
- Build once, promote the same image digest across environments.
- Add SBOM generation and vulnerability policy gates.
- Sign/attest images.
- Use immutable tags/digests.
- Add deployment approval for production.
- Validate service health and automatically roll back on failed rollout.

## Containers

- Pin supported base-image versions/digests.
- Use non-root runtime where feasible.
- Add health checks.
- Set CPU/memory limits/reservations.
- Use read-only filesystem and drop capabilities when compatible.

## Swarm

- Use 3 or 5 manager nodes for production quorum rather than a single manager.
- Separate ingress, app, data, and monitoring networks.
- Use encrypted overlay networks where appropriate.
- Add placement labels and anti-affinity strategy.

## Database

- Do not publish PostgreSQL publicly.
- Move from a single local-volume instance to managed/replicated PostgreSQL for HA.
- Define backups, PITR retention, restore drills, RPO and RTO.
- Handle migrations as an explicit deployment step.

## Secrets

- Rotate secrets regularly.
- Keep secret creation outside version control.
- Prefer a dedicated secret manager for larger environments.

## Observability

- Add application RED metrics: Rate, Errors, Duration.
- Add DB metrics and connection-pool visibility.
- Add centralized structured logs.
- Add tracing/OpenTelemetry.
- Add Alertmanager and actionable alerts.
- Define SLOs and dashboards around user-facing reliability.
