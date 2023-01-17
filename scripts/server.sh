#!/bin/sh
(cd /home/nodes/node_stockapi/dist && sudo npm install npm -g)
(cd /home/nodes/node_stockapi && node_modules/.bin/prisma migrate deploy)
(cd /home/nodes/node_stockapi && node_modules/.bin/prisma generate)
(cd /home/nodes/node_stockapi && node dist/infra/http/server.js)