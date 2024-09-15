# Visits

A simple Node.js application that tracks the number of visits to a page using Redis for storage.

## Features

- Tracks visits to the `/visits` endpoint.
- Stores visit count in Redis.
- REST API with JSON responses.
- Dockerized setup for both the Node.js app and Redis.

## Prerequisites

To run this project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 20.x recommended)
- [Docker](https://www.docker.com/)
- [Yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/aungkyawkyawsoe/visits.git
cd visits
```

2. Install dependencies using Yarn:

```bash
yarn
```

## Running Locally

1. Start the application using Docker:

```bash
docker-compose up --build
```

2. The server will start on port `3000`. You can check it by visiting:

```bash
http://localhost:3000/visits
```

## API Endpoints

- `GET /`: Test endpoint (triggers a forced process exit).
- `GET /visits`: Returns the current visit count as JSON and increments it by one.

Example response:

```json
{
  "visits": 1
}
```

## Project Structure

- `src/server.ts`: The main server file, handles routes and Redis connection.
- `Dockerfile`: Configuration for building the Node.js app container.
- `docker-compose.yml`: Orchestrates Redis and the Node.js app.

## Scripts

- `yarn start`: Starts the application.
- `yarn start:dev`: Starts the application in development mode with live-reloading using `nodemon`.

## Environment Variables

- `NODE_ENV`: Environment mode (default: `production`).
- `REDIS_HOST`: The Redis host (default: `localhost`).
- `REDIS_PORT`: The Redis port (default: `6379`).
- `SERVER_PORT`: The port for the Node.js server (default: `3000`).
