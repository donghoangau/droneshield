# Use an official Node.js image as the base
FROM mcr.microsoft.com/playwright:v1.37.1-focal

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy all project files into the container
COPY . .

# Install Playwright dependencies
RUN npx playwright install --with-deps

# Command to run Playwright tests
CMD ["npx", "playwright", "test"]
