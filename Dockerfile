# ─── Build stage ──────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

# Build argument with default
ARG BUILD_MODE=dev

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