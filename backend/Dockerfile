FROM node:22

WORKDIR /usr/src/app

COPY ./package.json ./

RUN yarn install

COPY . .

RUN yarn build

RUN yarn prisma generate

CMD ["yarn", "start:migrate:dev"]
