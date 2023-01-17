FROM node:14-alpine

# Create app directory
WORKDIR /home/nodes/node_stockapi

# Install app dependencies
COPY package*.json ./
RUN yarn

# Copy source code
COPY . .

# Build the app
RUN yarn build

WORKDIR /home/nodes/node_stockapi/dist
RUN npm i

WORKDIR /home/nodes/node_stockapi/

# Expose the app port
EXPOSE 3333

# Start the app
ENTRYPOINT ["sh", "scripts/server.sh"]
