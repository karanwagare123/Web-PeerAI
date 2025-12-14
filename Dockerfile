FROM node:18-alpine

WORKDIR /app
COPY web/package*.json ./
RUN npm install --only=production

COPY web/ ./


EXPOSE 8080
CMD ["npm", "start"]
