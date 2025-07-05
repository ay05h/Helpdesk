# Helpdesk

Helpdesk is a demo full-stack ticketing/helpdesk system built with React (Vite) for the frontend and Node.js/Express with MongoDB for the backend. It supports user authentication, ticket creation, and role-based dashboards for users, technical, and operations teams.

## Project Structure

```
.
├── client/   # React frontend (Vite, Redux, TailwindCSS)
└── server/   # Node.js backend (Express, Mongoose)
```

- See [client/README.md](client/README.md) for frontend details.
- See [server/README.md](server/README.md) for backend details.

## Demo User Credentials

| Role           | Email                  | Username  | Password |
| -------------- | ---------------------- | --------- | -------- |
| User           | cred@helpdesk.com      | user      | 12345678 |
| Operation Team | operation@helpdesk.com | operation | 12345678 |
| Tech Team      | technical@helpdesk.com | technical | 12345678 |

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance

### Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/ay05h/Helpdesk.git
   cd Helpdesk
   ```

2. **Install dependencies:**

   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Configure environment variables:**

   - Copy `.env.example` to `.env` in both `client/` and `server/` and fill in the required values.

4. **Run the development servers:**

   - In one terminal:
     ```sh
     cd server
     npm run dev
     ```
   - In another terminal:
     ```sh
     cd client
     npm run dev
     ```

5. **Access the app:**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend: [http://localhost:5000](http://localhost:5000) (default)

---
