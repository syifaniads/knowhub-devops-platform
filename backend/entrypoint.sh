#!/bin/sh
set -eu
npx prisma db push
exec node dist/main.js
