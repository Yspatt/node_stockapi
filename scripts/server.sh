#!/bin/sh
(node_modules/.bin/prisma migrate deploy)
(node_modules/.bin/prisma generate)
(node dist/infra/http/server.js)