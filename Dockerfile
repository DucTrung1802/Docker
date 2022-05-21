FROM node:alpine

WORKDIR /app

# RUN apk upgrade && apk update

COPY package.json .

RUN npm install

COPY src ./src/

CMD ["npm", "start"]