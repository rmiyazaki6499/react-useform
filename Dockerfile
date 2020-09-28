FROM node:12.18

RUN mkdir /app
WORKDIR /app

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install git && \
    apt-get install -y vim && \
    apt-get install -y tig && \
    apt-get install -y silversearcher-ag

COPY package.json ./

RUN npm install --silent && \
    npm install -g sequelize-cli

COPY . .

EXPOSE 3300

CMD npm start 
