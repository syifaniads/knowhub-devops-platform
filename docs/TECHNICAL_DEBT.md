# Technical debt review

## Authentication
The historical frontend demonstrated login/register behavior using browser local storage. This is not suitable authentication for production. A production design should move credential validation server-side, hash passwords with a strong adaptive password hash, use secure sessions/tokens, apply rate limits, and never keep plaintext passwords in browser storage.

## Database availability
The Swarm lab runs PostgreSQL as one stateful task. Three API replicas do not make the complete platform highly available. Production would require managed PostgreSQL or a tested replication/failover/backup strategy.

## Migrations
The historical backend used `prisma db push` at container startup. Production releases should use controlled `prisma migrate deploy` with migration artifacts and rollback/recovery planning.

## Images
The canonical stack uses pinned major/minor example tags for readability, but production should prefer immutable digests, SBOM generation, vulnerability policy, provenance/signing, and scheduled refreshes.

## Observability
The original scope focused on Node Exporter + Prometheus + Grafana. Production should add application metrics, centralized logs, traces, Alertmanager, SLOs, and paging rules.

## Swarm control plane
One manager matches the coursework requirement but has no manager quorum. Production Swarm would normally use 3 or 5 managers across failure domains.
