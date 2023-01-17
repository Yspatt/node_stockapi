FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN yarn

# Copy source code
COPY . .

# Build the app
RUN yarn build

# Expose the app port
EXPOSE 3333

# Start the app
CMD ["yarn", "prisma:deploy"]
CMD ["yarn", "prisma:generate"]
CMD ["yarn", "start"]
