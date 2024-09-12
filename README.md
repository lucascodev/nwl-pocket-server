# Project In.Orbit

*Project made by rocketseat*

## Description

*Project for the In.Orbit challenge.*

## Languages and Tools

*Languages and tools used to complete this project.*

- TypeScript: 5.6.2
- Node.js packages:
    - @types/node: 22.5.4
    - typescript: 5.6.2
    - @biomejs/biome: 1.8.3
    - drizzle-orm: 0.33.0
    - drizzle-kit: 0.24.2
    - dayjs: 1.11.13
    - fastify: 4.28.1
    - zod: 3.23.8
    - @paralleldrive/cuid2: 2.2.2
    - tsx: 4.19.0
    - fastify-type-provider-zod: 2.0.0
    - @fastify/cors: 9.0.1
    - postgres: 3.4.4

## Getting Started

*Steps required to install and run the project.*

### Prerequisites

- create a `.env` file in the root directory with the following content:

```env 
# Database connection string
DATABASE_URL=postgres://username:password@localhost:5432/inorbit

# DB docker
POSTGRES_USER=username
POSTGRES_PASSWORD=password
POSTGRES_DB=database
```

- Install the following packages:

```bash
npm install
```

### Running

- Run the following command to start the server:

```bash
npm run dev
```

## License

*Open Source projects.*