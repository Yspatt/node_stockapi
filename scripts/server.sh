#!/bin/sh
(dist/node_modules/.bin/prisma migrate deploy)
(dist/node_modules/.bin/prisma generate)
(node dist/infra/http/server.js)