# Helpdesk Client

This is the frontend for the Helpdesk system, built with [React](https://react.dev/), [Vite](https://vitejs.dev/), [Redux Toolkit](https://redux-toolkit.js.org/), and [TailwindCSS](https://tailwindcss.com/).

## Features

- User authentication frontend(login, signup, forgot password)
- Role-based dashboards (User, Tech Team, Operation Team)
- Ticket creation and listing
- Responsive UI with TailwindCSS

## Project Structure

```
client/
├── public/           # Static assets
├── src/
│   ├── assets/       # Images and SVGs
│   ├── components/   # Reusable React components
│   ├── pages/        # Page components (dashboard, tickets, auth, etc.)
│   ├── store/        # Redux slices and store
│   └── App.jsx       # Main app entry
├── connections/      # API connection logic (axios)
├── index.html
├── vite.config.js
└── ...
```

## Environment Variables

Create a `.env` file in the `client/` directory:

```
VITE_BACKEND_URL=http://localhost:5000
```

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Lint code

## Usage

1. Start the backend server (see [../server/README.md](../server/README.md)).
2. Run the frontend:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Demo User Credentials

See [../README.md](../README.md) for test user credentials.

---
