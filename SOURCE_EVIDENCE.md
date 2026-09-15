# Source evidence

## Primary sources

- Final Project DevOps Team 1 report (2025 implementation; cover carries a 2024 label).
- `https://github.com/Final-Project-DevOps/devops-platform-frontend`
- `https://github.com/Final-Project-DevOps/devops-platform-backend`
- `https://github.com/Final-Project-DevOps/infrastructure`
- historical branches/commits of `https://github.com/syifaniads/react-firebase-devops`

## Evidence mapping

| Claim | Evidence |
|---|---|
| frontend multi-stage container | final report + frontend Dockerfile lineage |
| backend multi-stage container | final report + backend Dockerfile |
| GHCR publication | report screenshots/YAML + frontend/backend workflows |
| 1 manager + 2 workers | final report Docker Swarm section |
| manager excluded from tasks | explicit project requirement; canonical runbook uses manager `drain` |
| custom overlay network | final report compose/stack excerpt |
| backend 3 replicas | final report stack excerpt |
| Docker Secrets | final report + backend history (`adapted to use docker secret`) |
| Prometheus/Grafana | final report screenshots/config + backend/infrastructure history |
| Syifani Docker/security contribution | commit `b35193d442a7f5dbd8b0a3c402213ce1f1ee24ed` authored by `syifaniads` |

## Portfolio reconstruction

The `frontend/`, `backend/`, and `infra/` directories are a sanitized canonical reconstruction based on the retained source and report. Historical workflows are preserved separately so reviewers can compare the original implementation with the cleaned portfolio form.
