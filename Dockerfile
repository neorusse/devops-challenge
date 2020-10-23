FROM node:alpine3.11

WORKDIR /app
COPY package.json /app
RUN npm install

COPY public public
COPY src src

RUN npm run build
WORKDIR /app/build

RUN npm install -g http-server

EXPOSE 8080
ENTRYPOINT http-server