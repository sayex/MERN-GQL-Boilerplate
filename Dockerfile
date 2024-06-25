FROM node:lts

WORKDIR /app

# COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]