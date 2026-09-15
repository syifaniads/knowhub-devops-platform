# Production hardening review

A senior-engineering follow-up to the original learning project.

## Delivery
- immutable SHA/digest image references
- branch protection and required CI checks
- unit/integration tests before image publication
- SBOM, vulnerability scanning, signed provenance/attestation
- controlled promotion instead of deploying mutable `latest` tags

## Runtime
- non-root containers where practical
- read-only filesystem/capability reduction
- CPU/memory requests or Swarm limits
- healthchecks and tested rollback behavior
- dedicated public/internal networks

## State
- managed PostgreSQL or tested HA topology
- encrypted backups + restore drills + PITR
- schema migration via `prisma migrate deploy`, not startup-time `db push`

## Secrets
- secret manager or Swarm secrets with rotation procedures
- no credentials in repository/report screenshots
- short-lived registry/cloud credentials where supported

## Observability
- RED metrics for API, database pool metrics, structured logs, traces
- Alertmanager and actionable alerts
- SLOs for availability and latency
- runbooks linked from alerts

## Swarm availability
The coursework requirement used one manager. A production Swarm control plane should use an odd manager quorum (commonly 3 or 5) spread across failure domains.
