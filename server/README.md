# Helpdesk Server

This is the backend for the Helpdesk system, built with [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), and [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/).

## Features

- REST API for authentication and ticket management
- MongoDB database integration
- Role-based user model (user, techTeam, operationTeam)
- Error and response handling utilities

## Project Structure

```
server/
├── controller/   # Route controllers (e.g., user.controller.js)
├── db/           # Database connection logic
├── models/       # Mongoose models (e.g., user.model.js)
├── routes/       # Express routers
├── utils/        # Utility classes (ApiError, ApiResponse)
├── index.js      # App entry point
├── package.json
└── .env
```

## Environment Variables

Create a `.env` file in the `server/` directory:

```
MONGODB_URI=mongodb://localhost:27017
CORS_ORIGIN=http://localhost:5173
PORT=5000
NODE_ENV=development
```

## Scripts

- `npm run dev` – Start server with nodemon
- `npm start` – Start server

## Usage

1. Ensure MongoDB is running and accessible.
2. Start the backend server:
   ```sh
   npm run dev
   ```
3. The API will be available at [http://localhost:5000/api/v1/helpdesk](http://localhost:5000/api/v1/helpdesk).

## Demo User Credentials

See [../README.md](../README.md) for test
