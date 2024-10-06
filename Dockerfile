# Stage build

FROM node:20.17.0 as build 

WORKDIR /app

COPY package*.json .

RUN npm install 

COPY . .

RUN npm run build 

# Stage final

FROM node:current-alpine3.19 as final

EXPOSE 6007

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=build /app/dist ./dist

RUN chown -R node:node .

USER node

CMD ["npm", "run", "start:prod"]

