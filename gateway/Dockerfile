# Base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy application code
COPY . .

# Expose the application port
EXPOSE 3000

# Run the application
CMD ["node", "server.js"]
