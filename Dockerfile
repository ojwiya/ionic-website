
FROM node:4.4

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

ENV NODE_ENV=staging

RUN npm install

EXPOSE 80

CMD [ "gulp", "serve" ]
