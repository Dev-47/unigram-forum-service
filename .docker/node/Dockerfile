FROM node:current-slim as base

WORKDIR /code/

COPY package.json package.json

RUN yarn

COPY . /code/

FROM base as dev

RUN npm install -g nodemon

CMD [ "yarn", "dev" ]

FROM base as prod

CMD [ "yarn", "start" ]
