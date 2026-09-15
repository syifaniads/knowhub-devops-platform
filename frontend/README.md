# KnowHub Frontend

React frontend retained from the KnowHub team project and reorganized for this monorepo. It provides post CRUD UI plus the historical demo login/register flow. `/api/*` is proxied by Nginx to the backend in containers.

The login/register implementation is intentionally documented as **demo/legacy behavior**: credentials stored in browser local storage are not a production authentication design. See `../docs/TECHNICAL_DEBT.md`.
