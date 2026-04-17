# ─── Build stage ──────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

# Build arguments
ARG BUILD_MODE=dev
ARG VITE_ADMIN_SYSTEM_1_URL=http://localhost:3001/

# Convert ARG → ENV
ENV VITE_ADMIN_SYSTEM_1_URL=$VITE_ADMIN_SYSTEM_1_URL

COPY package*.json ./
RUN npm ci

COPY . .

# Use the build arg
RUN npm run build -- --mode=${BUILD_MODE}


# ─── Serve stage ──────────────────────────────────────────────────────────────
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]