# CodeSense — AI Code Reviewer

CodeSense is a full-stack web application that lets developers paste code and receive instant, AI-powered code reviews. It uses Google Gemini as the AI backend and presents feedback in a clean, split-panel interface.

**Live demo:** [codesense-pink.vercel.app](https://codesense-pink.vercel.app/)

---

## Features

- Syntax-highlighted code editor with auto language detection
- AI reviews powered by Google Gemini 2.5 Flash Lite
- Feedback rendered as formatted Markdown with code highlighting
- Split-panel layout: editor on the left, review on the right
- Deployed frontend on Vercel, backend on Render

---

## Tech Stack

| Layer    | Technology                                                             |
| -------- | ---------------------------------------------------------------------- |
| Frontend | React 19, Vite, react-simple-code-editor, highlight.js, react-markdown |
| Backend  | Node.js, Express 5, Google GenAI SDK                                   |
| AI Model | Gemini 2.5 Flash Lite                                                  |
| Deploy   | Vercel (frontend), Render (backend)                                    |

---

## Project Structure

```
├── frontend/               # React + Vite app
│   ├── src/
│   │   ├── App.jsx         # Main UI component
│   │   ├── App.css         # Styles
│   │   └── main.jsx        # Entry point
│   ├── index.html
│   └── vercel.json         # Vercel SPA rewrite rules
│
└── backend/                # Express API
    ├── server.js            # Server entry point (port 8080)
    └── src/
        ├── app.js           # Express app + CORS config
        ├── routes/
        │   └── ai.routes.js # POST /ai/get-review
        ├── controllers/
        │   └── ai.controller.js
        └── services/
            └── ai.service.js  # Gemini API integration
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [Google Gemini API key](https://aistudio.google.com/app/apikey)

### Backend

```bash
cd backend
npm install
```

Create a `data.env` file:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Start the server:

```bash
npm start
# Server runs at http://localhost:8080
```

### Frontend

```bash
cd frontend
npm install
npm run dev
# App runs at http://localhost:5173
```

> The frontend points to the production backend by default (`https://code-reviewer-gzgu.onrender.com`). Update the URL in `frontend/src/App.jsx` if you want to use your local backend.

---

## API

### `POST /ai/get-review`

Submits code for review.

**Request body:**

```json
{
  "code": "function sum() { return 1 + 1 }"
}
```

**Response:** Plain text Markdown with the AI review.

---

## Deployment

**Frontend** is deployed on Vercel. The `vercel.json` rewrites all routes to `index.html` for SPA support.

**Backend** is deployed on Render. Make sure to set the `GEMINI_API_KEY` environment variable in your Render service settings.

---

## License

MIT
