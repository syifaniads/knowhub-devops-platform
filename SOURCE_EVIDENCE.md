# Source Evidence

## Primary report

**Final Project DevOps — Project Tim 1, POROS FILKOM UB (2024/2025)**

The report documents the assignment, Dockerfiles, GitHub Actions configuration, a Swarm cluster with one manager and two workers, secret/config requirements, Prometheus/Grafana monitoring, and a final stack configuration using PostgreSQL and Node Exporter.

The raw PDF is intentionally not copied into this public repository.

## Original GitHub sources

### Final team frontend
https://github.com/Final-Project-DevOps/devops-platform-frontend

Evidence includes:

- React application source,
- frontend Dockerfile,
- Docker-related files,
- Firebase deployment workflow,
- GHCR image workflow,
- commit history shared with personal development repositories.

### Final team backend
https://github.com/Final-Project-DevOps/devops-platform-backend

Evidence includes:

- Node.js/TypeScript backend,
- Prisma artifacts,
- multi-stage Dockerfile,
- GHCR workflow,
- PostgreSQL compose configuration,
- Prometheus configuration,
- historical commits for secrets and monitoring integration.

### Team infrastructure consolidation
https://github.com/Final-Project-DevOps/infrastructure

This is a later consolidated infrastructure/documentation repository. It is useful as a portfolio reference, but its 2026 reconstruction date means it should not be confused with the original 2025 commit timeline.

## Personal repository lineage

### `syifaniads/react-firebase-devops`
Chosen as the **canonical personal portfolio repository** because its name is meaningful and it contains Syifani's original development/CI history.

Direct evidence:

- `b35193d442a7f5dbd8b0a3c402213ce1f1ee24ed` — Docker config/security-scan/dependency work, authored by `syifaniads`.
- `e1cedb4407a2bac2a4ec39d71b562f2e9fbf4836` — current historical branch head, authored by `syifaniads`.

### `syifaniads/tes`
A duplicate/mirror lineage of the frontend. It contains the same final frontend commit SHAs that appear in the organization repository, including `524a4a450721ba3595855abfeb3cb1fdcb78d0cc`.

It is **deprecated as a portfolio entry** to avoid making recruiters inspect two repositories for the same project.

## Claim policy

This portfolio uses three labels conceptually:

- **Verified** — directly supported by source/report evidence.
- **Team-level** — supported by project evidence but not attributed to Syifani alone.
- **Recommended hardening** — an engineering improvement added to make the portfolio useful to senior reviewers, not a retroactive implementation claim.
