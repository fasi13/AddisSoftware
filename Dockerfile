FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package.lock ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "server.js" ]