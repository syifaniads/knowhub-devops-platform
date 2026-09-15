# Docker Secrets bootstrap

The Swarm stack expects three **external** secrets. Never commit the real values.

```bash
printf '%s' 'knowhub' | docker secret create postgres_user -
printf '%s' 'replace-with-strong-password' | docker secret create postgres_password -
printf '%s' 'postgresql://knowhub:replace-with-strong-password@postgres:5432/knowhub?schema=public' | docker secret create db_url -
```

Verify with `docker secret ls`. Rotate any credential that has ever appeared in screenshots, shell history, reports, or Git history.
