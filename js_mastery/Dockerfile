FROM node:20.10.0-slim

WORKDIR /app/node/js_mastery
COPY . .

RUN npm ci
RUN npm run build

#CMD ["npm", "run", "dev"]
