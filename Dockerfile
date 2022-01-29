FROM node:alpine

COPY . .

RUN npm i

EXPOSE 3000

CMD [ "node", "index" ]

