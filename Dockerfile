FROM node:20.11.1 AS build

# NOTE: Tengo que instalar Angular si no, no me funciona la imágen
RUN npm install -g @angular/cli

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4200

CMD ng serve --host 0.0.0.0
