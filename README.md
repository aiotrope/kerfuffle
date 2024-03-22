# kerfuffle
Q&A System (Magnetar project revision).

## CLI Commands

```
# build docker images
$ cd llm && docker build -t llm . -f dev.Dockerfile
$ cd backend && docker build -t backend . -f dev.Dockerfile
$ cd frontend && docker build -t frontend . -f dev.Dockerfile

# DEV MODE
# buid/rebuild docker images based on docker-compose on debug mode; running on port 7800
# remove app-cache/ && production-database-data/ from previous production mode before proceeding
# to restart on debug mode on port 7800
$ cd kerfuffle && docker compose -f docker-compose.dev.yml up --build
# to restart on debug mode; running on port 7800
$ docker compose -f docker-compose.dev.yml up -d
# stop running containers
$ docker compose -f docker-compose.dev.yml down
```