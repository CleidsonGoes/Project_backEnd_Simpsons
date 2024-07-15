FROM node:16-alpine

#Install typescript globally
RUN npm install --g typescript

WORKDIR /app