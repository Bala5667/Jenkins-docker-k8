# frontend/Dockerfile
FROM node:18

WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build app
RUN npm run build

# Install serve to run production build
RUN npm install -g serve

EXPOSE 3000

# Command to run the production build
CMD ["serve", "-s", "build"]
