FROM node:alpine3.10

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install

CMD [ "npm","run","dev" ]