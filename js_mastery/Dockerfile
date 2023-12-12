FROM node:20.10.0-slim

WORKDIR /home/node/app
COPY . .

RUN npm ci
RUN npm run build

#CMD ["npm", "run", "dev"]
