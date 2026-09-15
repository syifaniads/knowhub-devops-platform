# Portfolio Infrastructure Reference

These files are **cleaned reference configurations** derived from the retained project architecture. They are not presented as byte-for-byte copies of the historical deployment.

- `docker-stack.portfolio.yml` — Swarm topology with worker placement, external secrets, custom overlay network, persistence, Prometheus/Grafana and Node Exporter.
- `prometheus.yml` — minimal Node Exporter scrape configuration.

Use immutable image tags and create Docker Secrets before deployment.
