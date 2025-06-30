FROM node:lts-alpine

WORKDIR /app

COPY node-container/package*.json . 
RUN npm install

COPY node-container . 
RUN npm run build

EXPOSE 8080
CMD ["node", "dist/main.js"]