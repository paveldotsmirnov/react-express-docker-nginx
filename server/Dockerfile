FROM node:18
WORKDIR /app

COPY package.json package-lock.json ./

RUN rm -rf node_modules && npm cache clean --force

RUN npm ci

COPY . .

EXPOSE 5000
CMD ["node", "index.js"]
