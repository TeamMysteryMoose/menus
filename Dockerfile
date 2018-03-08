FROM node:6.13.0
WORKDIR /menus
COPY package.json .
RUN npm install --quiet

COPY . .