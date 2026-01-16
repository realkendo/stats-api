# stats-api

A backend service for storing, querying, and aggregating structured sports match data.

Built with Node.js and TypeScript, this project demonstrates clean backend architecture, explicit separation of concerns, and data-centric API design.

---

## Overview

`stats-api` exposes a set of HTTP APIs for managing match-related data and computing derived statistics such as team performance and aggregated metrics.

The system is designed with clarity, correctness, and extensibility in mind, following established backend engineering principles.

---

## Core Capabilities

- Structured storage of match and team data
- Clear separation between routing, controllers, and business logic
- Deterministic, predictable API responses
- Aggregated and computed statistics (beyond basic CRUD)
- Configuration-driven runtime behavior

---

## Tech Stack

- **Node.js** — runtime
- **TypeScript** — static typing and correctness
- **Express** — HTTP layer
- **PostgreSQL** — relational data store
- **Prisma** — database access layer

---

## Architecture

src/
├── index.ts # Application entry point
├── routes/ # HTTP route definitions
├── controllers/ # Request lifecycle handling
├── services/ # Business and domain logic
├── config/ # Environment and app configuration

yaml
Copy code

Design principles:

- Routes are thin and declarative
- Controllers handle HTTP concerns only
- Services encapsulate all business logic
- Data access is isolated from request handling

---

## Running the Service

### Install dependencies

```
npm install

Development
npm run dev

Build
npm run build

Production
npm start

Design Notes
Centralized error handling ensures consistent failure modes

Configuration is externalized via environment variables

Data integrity is enforced at the schema level

The system is structured to scale toward more advanced analytics and simulations

Roadmap
-Add authentication and authorization

-Introduce caching for read-heavy endpoints

-Expand statistical and analytical endpoints

-Add background processing for heavy computations

Summary
This project demonstrates practical backend engineering skills:
*system structure
*data modeling
*API design
*Maintainable Node.js application architecture.
```
