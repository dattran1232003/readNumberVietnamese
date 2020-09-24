FROM node:10

WORKDIR /home/trandat/readNumber

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "app.js"]


