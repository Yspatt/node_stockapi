FROM node:lts-alpine AS devDependencies
WORKDIR /home/nodes/node_stockapi
COPY package.json yarn.* tsconfig.json ./
COPY ./src ./src
RUN yarn install --production=false --frozen-lockfile

FROM node:lts-alpine AS dependencies
WORKDIR /home/nodes/node_stockapi
COPY package.json yarn.* ./
COPY ./src ./src
RUN yarn install --production=true --frozen-lockfile

FROM node:lts-alpine AS build
WORKDIR /home/nodes/node_stockapi
COPY --from=devDependencies /home/nodes/node_stockapi/ .
COPY . .
RUN yarn build

FROM node:lts-alpine AS runtime
USER node
COPY --chown=node:node --from=dependencies /home/nodes/node_stockapi/node_modules /home/nodes/node_stockapi/node_modules/
COPY --from=build --chown=node:node /node_stockapi/dist /home/nodes/node_stockapi/dist/
COPY --from=build --chown=node:node /node_stockapi/scripts /home/nodes/node_stockapi/scripts/
COPY --from=build --chown=node:node /node_stockapi/prisma /home/nodes/node_stockapi/prisma/

ENTRYPOINT ["sh","/home/nodes/node_stockapi/scripts/server.sh"]