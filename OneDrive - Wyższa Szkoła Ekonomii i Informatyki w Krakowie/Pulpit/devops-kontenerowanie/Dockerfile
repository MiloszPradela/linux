FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

#  Vite default port 5173 
EXPOSE 5173

# Run the development server
CMD ["npm", "run", "dev", "--", "--host"]
