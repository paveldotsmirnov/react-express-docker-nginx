# Multi React App with Express API using Docker Compose and Nginx

This project demonstrates how to serve **two separate React applications** and a **Node.js Express API** on a single server using **Docker Compose** and **Nginx** as a reverse proxy.

## 📦 What’s Inside

- `react-app-1`: First React frontend app, served at `/`
- `react-app-2`: Second React frontend app, served at `/app2`
- `express-server`: Node.js Express API, available at `/api`
- `nginx`: Configured to serve both apps and proxy API requests

## 🚀 How It Works

Nginx serves the static files from both React builds and proxies API requests to the Express server:

- `/` → React App 1
- `/app2` → React App 2
- `/api` → Express API

All services are containerized and orchestrated via Docker Compose.

## 🐳 Getting Started

### Prerequisites
- Docker
- Docker Compose

### Build and Run

```bash
docker-compose up --build
```

This will:

1. Build and run both React apps
2. Start the Express server
3. Serve everything through Nginx on port `80`
