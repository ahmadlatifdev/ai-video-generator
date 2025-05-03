FROM node:18  # Official Node.js image
WORKDIR /app  # Working directory
COPY . .      # Copy all files
RUN npm install  # Install dependencies
CMD ["node", "index.js"]  # Run your main JS file
