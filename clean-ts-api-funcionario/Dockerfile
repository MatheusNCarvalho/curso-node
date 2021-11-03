FROM node:14.18.1
WORKDIR /usr/src/app
COPY ./package.json .
COPY ./ormconfig.js .
RUN npm install --only=prod