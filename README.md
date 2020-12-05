# Strapi + Next + Docker Starter
Kickstart your JAMstack app with [Strapi](https://strapi.io/) as an API provider,
[Next.js](https://nextjs.org/) for generating front-end,
and all wrapped in neat [Docker](https://www.docker.com/) containers!

## Setup

1. Create your own repository from this template or clone the repository: `git clone git@github.com:mciszczon/strapi-next-starter.git`
2. Run `docker-compose pull && docker-compose build`
3. You might need to run `docker-compose run frontend npm i` to install NPM requiremenets for the first time.
4. Run `docker-compose up -d` to build and run containers.
5. You're all done. Now:
  Open `localhost:3000` to see the front-end app.
  Open `localhost:5000` to see the front-end app documentation.
  Open `localhost:1337` to see the API backend.
