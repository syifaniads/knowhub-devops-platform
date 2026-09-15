# Observability

## Implemented monitoring path

The final project integrated:

```text
Node Exporter
    ↓ scrape :9100
Prometheus
    ↓ datasource
Grafana
```

The retained Prometheus configuration used a 15-second scrape interval and targeted `node-exporter:9100`.

## What this gives

Infrastructure-level visibility can cover host/container-adjacent metrics such as CPU, memory, filesystem, load and network statistics exposed by Node Exporter.

## What it does not prove

The retained evidence does not demonstrate a mature observability platform with:

- application-level request/error/latency metrics,
- distributed tracing,
- centralized structured logs,
- Alertmanager routing,
- SLO/error-budget definitions,
- long-term Prometheus storage.

Those capabilities are deliberately listed as production improvements instead of being claimed as implemented.

## Production metrics I would add

For the API:

- request rate,
- p50/p95/p99 latency,
- 4xx/5xx rate,
- active requests,
- DB connection-pool saturation,
- DB query duration.

For Swarm:

- task restart count,
- desired vs running replicas,
- node availability,
- image pull/deployment failures,
- resource saturation.

For PostgreSQL:

- connections,
- transaction rate,
- locks/deadlocks,
- disk usage,
- checkpoint/WAL pressure.
