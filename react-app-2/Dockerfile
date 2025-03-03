FROM node:18 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
WORKDIR /usr/share/nginx/html/react-app-2
COPY --from=builder /app/build ./
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
