FROM node:20.11.1-alpine

# RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

ENV NODE_ENV development

ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app

# COPY --chown=node:node . .

RUN yarn install 

EXPOSE 5173

# USER node

CMD ["yarn", "dev"]