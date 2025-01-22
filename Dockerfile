# Base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only package.json and pnpm-lock.yaml first to leverage caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the .env file and the rest of the application
COPY .env .
COPY . .

# Build the Next.js app
RUN pnpm build

# Expose the port
EXPOSE 3000

# Start the Next.js app
CMD ["pnpm", "start"]