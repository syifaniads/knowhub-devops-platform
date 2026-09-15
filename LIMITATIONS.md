# Limitations

## Evidence limitations

- The report proves a working coursework-level Swarm/monitoring setup, but it does not preserve complete machine-readable deployment logs for every stage.
- The application had multiple hosting/deployment paths during development (Firebase/Netlify and Docker/Swarm), so they should not be presented as one simultaneous production topology.
- The organization infrastructure repository was consolidated later in 2026; it is supporting portfolio evidence, not original 2025 timeline evidence.

## Architecture limitations

- PostgreSQL was single-instance; persistent volume != high availability.
- Swarm local volumes are node-local unless an external/shared storage driver is used.
- Infrastructure monitoring was basic and did not prove application SLOs or distributed tracing.
- No retained evidence proves automated disaster recovery, database backups, restore drills, or multi-manager quorum.
- The original final workflow did not demonstrate a full test/security gate before every registry push.

## Historical configuration debt

- Personal compose/stack iterations contained development defaults and were not the final secure configuration.
- The historical frontend GHCR workflow had a registry/image-name composition issue.
- Branch names differed across repositories (`main-clean`, `main`, `master`).

The portfolio keeps these facts visible because diagnosing configuration drift is part of DevOps engineering.
