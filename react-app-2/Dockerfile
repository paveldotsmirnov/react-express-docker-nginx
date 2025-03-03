FROM node:18

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g serve  # Install `serve` globally

EXPOSE 3001
CMD ["serve", "-s", "build", "-l", "3001"]
