# Portfolio Copy

## One-line summary

**KnowHub DevOps Platform** — Collaborative DevOps project that containerized a React/Node/PostgreSQL web application, automated image delivery with GitHub Actions and GHCR, deployed workloads to a 3-node Docker Swarm, managed runtime secrets/config, and added Prometheus/Grafana monitoring.

## CV-ready bullets

- Contributed hands-on to a three-person DevOps project delivering a containerized React/Node.js application through **GitHub Actions → GHCR → Docker Swarm**, with a 1-manager/2-worker cluster architecture.
- Implemented frontend Docker/security tooling in personal Git history, including multi-stage containerization, environment hygiene, and vulnerability-scan setup; project-wide deployment used custom overlay networking, Docker Secrets/Config, PostgreSQL persistence, and replicated application services.
- Integrated infrastructure monitoring using **Node Exporter, Prometheus, and Grafana**, and documented limitations around stateful HA, immutable image promotion, CI quality gates, and secret management.

## Interview talking points

Be ready to explain:

1. Why the manager should be drained / constrained from workload scheduling.
2. How Swarm service discovery works on an overlay network.
3. Difference between Docker Config and Docker Secret.
4. Why a replicated API does not make a single PostgreSQL instance HA.
5. Why local Swarm volumes create node-affinity concerns.
6. How GitHub Actions authenticates to GHCR and how `GITHUB_TOKEN` differs from a PAT.
7. Why immutable image tags/digests are safer than `latest`.
8. What Node Exporter can and cannot tell you about application health.
9. How you would add health checks, alerting, rollback gates, SBOMs, image signing, and DB backup/restore testing.

## Skills

`Docker` · `Docker Swarm` · `GitHub Actions` · `GHCR` · `React` · `Node.js` · `PostgreSQL` · `Docker Secrets` · `Docker Config` · `Overlay Networking` · `Prometheus` · `Grafana` · `Node Exporter` · `CI/CD` · `DevOps`
