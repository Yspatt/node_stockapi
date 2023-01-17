#!/bin/sh
(cd dist && ls && node_modules/.bin/prisma migrate deploy)
(cd dist && node_modules/.bin/prisma generate)
(node dist/infra/http/server.js)