# CI/CD

## Historical delivery flow

The retained project report and source repositories show GitHub Actions workflows that built container images and published them to GitHub Container Registry (GHCR). The frontend also had an earlier Firebase Hosting workflow.

```text
push / manual dispatch
        ↓
GitHub Actions
        ↓
checkout
        ↓
Docker Buildx
        ↓
registry login
        ↓
metadata / tags
        ↓
build image
        ↓
push to GHCR
        ↓
Docker Swarm pulls image
```

## Evidence

Original team workflows:

- Frontend: `Final-Project-DevOps/devops-platform-frontend/.github/workflows/publish-image.yml`
- Backend: `Final-Project-DevOps/devops-platform-backend/.github/workflows/publish_image.yml`

The backend workflow used `REGISTRY=ghcr.io` and `IMAGE_NAME=${{ github.repository }}`, which composes cleanly as `ghcr.io/<owner>/<repo>`.

The historical frontend workflow set:

```yaml
REGISTRY: ghcr.io
IMAGE_NAME: ghcr.io/final-project-devops/front-end
```

and then supplied `${REGISTRY}/${IMAGE_NAME}` to `docker/metadata-action`. That can yield a duplicated registry prefix. The coursework evidence still demonstrates the intended GHCR pipeline, but the portfolio does not present that expression as a best-practice example.

A corrected reference is stored in `examples/ci/frontend-ghcr.yml`.

## Credential model

Historical workflow examples used `GHCR_TOKEN`. For a repository-scoped workflow, a cleaner modern baseline is:

```yaml
permissions:
  contents: read
  packages: write
```

and `${{ secrets.GITHUB_TOKEN }}` when organization/package policy allows it. A PAT is only needed when package permissions or cross-repository requirements demand it.

## Tagging and promotion

The coursework primarily followed branch tags such as `master`. For a production pipeline I would use immutable image identifiers such as Git SHA, plus optional channel tags:

```text
:sha-<commit>
:main
:v1.2.3
```

Swarm deployment should reference an immutable tag/digest for reproducibility rather than only `latest`.

## Missing production gates

The retained final report does not provide strong evidence of all of the following as mandatory CI gates:

- automated unit/integration tests before image publication,
- SBOM generation,
- signature/attestation verification,
- policy-enforced vulnerability thresholds,
- automatic deployment rollback based on health metrics.

These are listed as hardening opportunities rather than retroactively claimed features.
