#!/bin/sh
(ls)
(cd /home/nodes/node_stockapi/dist && node_modules/.bin/prisma migrate deploy)
(cd /home/nodes/node_stockapi/dist && node_modules/.bin/prisma generate)
(cd /home/nodes/node_stockapi && node dist/infra/http/server.js)