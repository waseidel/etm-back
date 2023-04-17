# syntax=docker/dockerfile:1
#Base Image
FROM node:19-alpine

# Create App directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Start app in development mode
CMD [ "npm", "run", "start:dev" ]
