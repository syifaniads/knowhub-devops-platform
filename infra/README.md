# Infrastructure

This directory is the runnable infrastructure layer for the canonical KnowHub monorepo.

- `docker-compose.yml` — local build/run path for frontend, backend, PostgreSQL, Prometheus, Grafana, and Node Exporter.
- `docker-stack.yml` — Swarm deployment aligned with the final-project requirement.
- `prometheus/prometheus.yml` — retained 15-second Node Exporter scrape configuration.
- `secrets/README.md` — external Docker Secret bootstrap without committing values.
- `swarm/DEPLOYMENT.md` — 1-manager/2-worker setup and validation steps.

Historical configuration is preserved under `../workflows/historical/` and source provenance is documented in `../SOURCE_EVIDENCE.md`.
