# Corrected CI References

The historical project workflows remain available in the original team repositories. These files are portfolio references showing how I would express the same GHCR build/publish intent today.

They intentionally:

- use `GITHUB_TOKEN` with explicit `packages: write`,
- avoid duplicating `ghcr.io` in the image name,
- generate immutable SHA tags,
- keep build caching explicit.

They are examples, not retroactive claims about the 2025 workflow.
