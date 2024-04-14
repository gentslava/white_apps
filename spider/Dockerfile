FROM node:21-slim

WORKDIR /app

RUN apt update \
  && apt install -y \
    libgtk-3-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2

COPY src src

COPY package*.json .

RUN npm ci

VOLUME [ "screenshots", "accounts" ]

CMD [ "npm", "start" ]