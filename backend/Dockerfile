FROM denoland/deno:alpine-1.37.0

EXPOSE 8000

WORKDIR /app

COPY deps.ts .

RUN deno cache deps.ts

COPY . .

CMD [ "deno", "task", "dev"]