# Limitations

- The coursework cluster used one Swarm manager, so there was no control-plane quorum.
- PostgreSQL was a single stateful database task; application replicas do not create database HA.
- The historical login/register frontend was a client-side demonstration rather than secure production authentication.
- Retained evidence proves monitoring deployment/configuration, not a mature alerting/SLO program.
- The report proves a 1-manager/2-worker lab and final stack structure, not production-scale load testing.
- Bonus items in the assignment such as Terraform, Ansible, Helm, or Docker Scout are not claimed as completed without stronger retained evidence.
- Canonical monorepo files are sanitized/reconciled for reproducibility and are not byte-for-byte historical submission files; originals remain linked in `SOURCE_EVIDENCE.md`.
