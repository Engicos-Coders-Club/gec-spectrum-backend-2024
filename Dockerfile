# Development stage
FROM node:16 as development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY tsconfig.json ./
COPY ./src ./src
CMD [ "npm", "run", "dev" ]

# Builder stage
FROM development as builder
WORKDIR /usr/src/app
RUN npm run build

# Production stage
FROM node:16-alpine as production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY --from=builder /usr/src/app/dist ./dist
CMD [ "node", "dist/app.js" ]
