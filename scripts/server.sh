#!/bin/sh
(cd /home/nodes/node_stockapi/dist && npm install --save reflect-metadata rxjs)
(cd /home/nodes/node_stockapi && node_modules/.bin/prisma migrate deploy)
(cd /home/nodes/node_stockapi && node_modules/.bin/prisma generate)
(cd /home/nodes/node_stockapi && node dist/infra/http/server.js)