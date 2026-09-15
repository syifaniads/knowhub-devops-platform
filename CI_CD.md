# CI/CD

## Active canonical pipeline

The monorepo now keeps the executable CI/CD in `.github/workflows/`:

```text
pull request / push
        ↓
       CI
        ├── frontend install + build + Docker build
        └── backend install + Prisma generate + TypeScript build + Docker build

push to main affecting frontend/backend
        ↓
publish-images.yml
        ↓
Docker Buildx
        ↓
GITHUB_TOKEN -> GHCR
        ↓
frontend image + backend image
        ↓
branch tag + immutable SHA tag
```

The publication workflow uses repository-scoped package permissions:

```yaml
permissions:
  contents: read
  packages: write
```

and publishes under:

```text
ghcr.io/<owner>/<repository>/frontend
ghcr.io/<owner>/<repository>/backend
```

## Historical pipeline evidence

The original 2025 project had separate frontend/backend workflows and an earlier Firebase deployment path. Exact portfolio copies are retained under `workflows/historical/`.

The historical frontend GHCR workflow combined `REGISTRY=ghcr.io` with an `IMAGE_NAME` that already contained `ghcr.io`, then concatenated the two for metadata generation. That is kept as evidence rather than presented as a recommended current pattern.

## Why two versions are kept

- `workflows/historical/` answers **what existed in the project history?**
- `.github/workflows/` answers **how is the consolidated monorepo structured now?**

This prevents portfolio cleanup from silently rewriting the project provenance.

## Image promotion

The current workflow emits branch and SHA tags. For a real release process, deployments should prefer immutable SHA/digest references and promote a tested digest between environments.

## Production gates still recommended

The final report does not prove that all of these were mandatory historical gates, so they remain hardening recommendations:

- unit/integration test suites with meaningful assertions,
- SBOM generation,
- enforced vulnerability thresholds,
- signed images/provenance attestations,
- deployment health gates and automated rollback,
- environment approval/promotion controls.

See `docs/PRODUCTION_HARDENING.md`.
