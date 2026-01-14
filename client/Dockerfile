FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 5174
CMD ["npm", "run","dev","--","--host","0.0.0.0"]
#docker build -t client-app .
#docker run -p 5174:5174 client-app