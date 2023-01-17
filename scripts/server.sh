#!/bin/sh

(cd dist && node_modules/.bin/prisma migrate deploy)
(cd dist && node_modules/.bin/prisma generate)
(node dist/infra/http/server.js)