# Multi-stage Dockerfile for Railway backend deployment
FROM node:20-alpine AS builder

WORKDIR /app

# Copy root and server package specifications
COPY package*.json ./
COPY server/package*.json ./server/

# Install all server dependencies including typescript
RUN cd server && npm install

# Copy full source
COPY . .

# Compile TypeScript
RUN cd server && npm run build

# Production runner stage
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000

# Copy package definitions and compiled server
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/server/package*.json ./server/
COPY --from=builder /app/server/node_modules ./server/node_modules
COPY --from=builder /app/server/dist ./server/dist
COPY --from=builder /app/index.js ./index.js

EXPOSE 5000

CMD ["node", "index.js"]
