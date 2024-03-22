FROM node:20.11.1-alpine

# RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

ENV NODE_ENV development

WORKDIR /app

COPY --chown=node:node . .

RUN yarn install --frozen-lockfile

EXPOSE 8080

USER node

CMD ["yarn", "dev"]