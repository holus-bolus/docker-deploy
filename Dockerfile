# Stage 1: Build Stage
FROM node:lts-alpine as builder

# Optional: Install build tools (useful if any dependency requires native compilation)
RUN apk add --no-cache python3 make g++

# Set working directory for the build stage
WORKDIR /app

# Copy package.json (and optionally package-lock.json) into the container
COPY package.json .
# COPY package-lock.json .

# Install only production dependencies
RUN npm install --only=prod

# Stage 2: Production Stage
FROM node:lts-alpine

# Set environment variable for production mode
ENV NODE_ENV=production

# Set working directory for the runtime stage
WORKDIR /app

# Copy the application source code to the container
COPY . .

# Copy the installed node_modules from the builder stage
COPY --from=builder /app/node_modules ./node_modules

# Expose the port on which your app will run
EXPOSE 3000

# Define the command to run your app
CMD ["node", "server.js"]
