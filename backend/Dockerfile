FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]

# docker build -t backend-app . 
# docker run -p 5000:5000 backend-app
