FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Install serve globally (to serve the built app)
RUN npm install -g serve

# Expose the port that the app will run on
EXPOSE 3000

# Command to run the app using serve
CMD ["serve", "-s", "build"]
