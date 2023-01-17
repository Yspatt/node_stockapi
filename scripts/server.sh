#!/bin/sh
(ls && node_modules/.bin/prisma migrate deploy)
(ls && node_modules/.bin/prisma generate)
(ls && node dist/infra/http/server.js)