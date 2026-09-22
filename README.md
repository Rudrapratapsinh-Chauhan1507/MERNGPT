# MERNGPT

A full-stack AI chat application built with the **MERN stack**, designed to explore modern full-stack development, REST APIs, MongoDB persistence, React state management, and AI API integration.

> MERNGPT is an original learning and experimentation project inspired by modern conversational AI interfaces. It is not an official ChatGPT clone.

## 🌐 Live Demo

**Frontend:** https://merngpt-puce.vercel.app

**Backend API:** https://merngpt-backend.onrender.com

The application is deployed using:

- **Vercel** — React/Vite frontend
- **Render** — Node.js/Express backend
- **MongoDB Atlas** — database
- **Google Gemini API** — AI response generation

> The Render free service may take some time to wake up after a period of inactivity.

---

## 🚀 Features

### 💬 AI Chat

- Start a new conversation with a unique thread ID
- Send prompts from the React frontend
- Receive AI-generated responses through the backend
- Display conversations in a conversational interface
- Show a loading indicator while waiting for an AI response

### 🗂️ Conversation Management

- Automatically persist conversations in MongoDB
- View previously created conversations
- Open existing conversation threads
- Delete saved conversations
- Highlight the currently selected conversation
- Create a fresh conversation with the **New Chat** action

### 📝 AI Response Rendering

- Render AI responses using Markdown
- Syntax highlighting for code blocks
- Support structured AI-generated content
- Display user and assistant messages separately

### 🖥️ User Interface

- Sidebar-based conversation history
- Chat workspace
- New Chat functionality
- Profile/settings UI foundation
- Responsive layout for the main application

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React | UI development |
| Vite | Frontend build tool and development server |
| React Context API | Shared application state |
| React Markdown | Markdown rendering |
| rehype-highlight | Code-block highlighting integration |
| highlight.js | Syntax highlighting |
| react-spinners | Loading indicators |
| UUID | Unique conversation/thread IDs |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | REST API server |
| MongoDB | Conversation persistence |
| Mongoose | MongoDB object modeling |
| dotenv | Environment variable management |
| CORS | Cross-origin request configuration |

### AI

- **Google Gemini API**
- Gemini's OpenAI-compatible Chat Completions endpoint

---

## 🏗️ System Architecture

```text
                         MERNGPT
                            │
             ┌──────────────┴──────────────┐
             │                             │
       Vercel Frontend                Render Backend
             │                             │
          React                         Express
             │                             │
             │                       ┌─────┴─────┐
             │                       │           │
             │                  MongoDB Atlas  Gemini API
             │                       │           │
             └───────────────────────┴───────────┘
```

### Request Flow

```text
User
  │
  ▼
React / Vite Frontend
  │
  │ POST /api/chat
  ▼
Express Backend
  │
  ├── Validate request
  │
  ├── Find or create thread
  │
  ├── Store user message
  │
  ├── Send prompt to Gemini
  │
  ├── Store assistant response
  │
  ▼
MongoDB Atlas
  │
  ▼
Express Response
  │
  ▼
React Chat Interface
```

---

## 📁 Project Structure

```text
MERNGPT/
│
├── Backend/
│   ├── models/
│   │   └── Thread.js
│   │
│   ├── routes/
│   │   └── chat.js
│   │
│   ├── utils/
│   │   └── openai.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── Frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── Chat.jsx
│   │   ├── ChatWindow.jsx
│   │   ├── MyContent.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

> `.env` files are local/deployment configuration files and should not be committed when they contain secrets.

---

# ⚙️ Getting Started

## Prerequisites

Install or create the following before running MERNGPT locally:

- [Node.js](https://nodejs.org/)
- npm
- MongoDB Atlas account or a local MongoDB instance
- Google Gemini API key

---

## 1. Clone the Repository

```bash
git clone https://github.com/Rudrapratapsinh-Chauhan1507/MERNGPT.git
cd MERNGPT
```

---

## 2. Install Backend Dependencies

```bash
cd Backend
npm install
```

---

## 3. Configure Backend Environment Variables

Create:

```text
Backend/.env
```

Add:

```env
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=your_gemini_model_name
FRONTEND_URL=http://localhost:5173
```

### Example

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
GEMINI_API_KEY=your_api_key
GEMINI_MODEL=your_model_name
FRONTEND_URL=http://localhost:5173
```

> Never commit `Backend/.env` or expose API keys and database credentials publicly.

---

## 4. Start the Backend

From the `Backend` directory:

```bash
node server.js
```

For development with Nodemon:

```bash
npx nodemon server.js
```

The local backend runs on:

```text
http://localhost:8080
```

API base URL:

```text
http://localhost:8080/api
```

---

## 5. Install Frontend Dependencies

Open a second terminal:

```bash
cd Frontend
npm install
```

---

## 6. Configure Frontend Environment Variables

Create:

```text
Frontend/.env
```

Add:

```env
VITE_API_URL=http://localhost:8080
```

For the deployed application, the value is:

```env
VITE_API_URL=https://merngpt-backend.onrender.com
```

> Vite exposes variables prefixed with `VITE_` to frontend code. Do not put private API keys or database credentials in frontend environment variables.

---

## 7. Start the Frontend

From the `Frontend` directory:

```bash
npm run dev
```

Vite will normally provide a local URL similar to:

```text
http://localhost:5173
```

Open the displayed URL in your browser.

---

# 🔌 API Endpoints

The backend API is mounted under:

```text
/api
```

### Get All Threads

```http
GET /api/thread
```

Returns saved conversation threads, ordered by their latest update.

### Get a Specific Thread

```http
GET /api/thread/:threadId
```

Returns the messages belonging to the requested conversation.

### Send a Chat Message

```http
POST /api/chat
```

Request body:

```json
{
  "threadId": "unique-thread-id",
  "message": "Your message here"
}
```

Response:

```json
{
  "reply": "Assistant response"
}
```

### Delete a Thread

```http
DELETE /api/thread/:threadId
```

Deletes the specified conversation from MongoDB.

---

# 🔐 Environment Variables

## Backend

| Variable | Purpose | Example |
|---|---|---|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `GEMINI_API_KEY` | Gemini API authentication | `your_api_key` |
| `GEMINI_MODEL` | Gemini model used for responses | `your_model` |
| `FRONTEND_URL` | Allowed frontend origin for CORS | `http://localhost:5173` |

## Frontend

| Variable | Purpose | Example |
|---|---|---|
| `VITE_API_URL` | Backend API base URL | `http://localhost:8080` |

### Production Configuration

```text
Frontend
VITE_API_URL
    ↓
https://merngpt-backend.onrender.com

Backend
FRONTEND_URL
    ↓
https://merngpt-puce.vercel.app
```

> Keep secrets such as `GEMINI_API_KEY` and `MONGODB_URI` only on the backend/deployment environment.

---

# 🚀 Deployment

## Frontend — Vercel

The React/Vite frontend is deployed on Vercel.

### Configuration

```text
Root Directory: Frontend
Framework: Vite
Environment Variable:
VITE_API_URL=https://merngpt-backend.onrender.com
```

Live frontend:

```text
https://merngpt-puce.vercel.app
```

---

## Backend — Render

The Node.js/Express backend is deployed on Render.

### Configuration

```text
Root Directory: Backend
Build Command: npm install
Start Command: node server.js
```

Required environment variables:

```env
MONGODB_URI=...
GEMINI_API_KEY=...
GEMINI_MODEL=...
FRONTEND_URL=https://merngpt-puce.vercel.app
```

Live backend:

```text
https://merngpt-backend.onrender.com
```

The server binds to Render's assigned port and listens on `0.0.0.0`.

---

## Database — MongoDB Atlas

MongoDB Atlas stores the application's conversation threads and messages.

The backend connects using:

```env
MONGODB_URI=your_mongodb_connection_string
```

For a deployed backend, make sure the database network configuration allows the Render service to connect.

---

# 🧠 What I Learned

This project helped build practical understanding of:

- React component architecture
- React Context API
- State management
- REST API development
- Express.js routing
- MongoDB and Mongoose
- CRUD operations
- Asynchronous JavaScript
- AI API integration
- Markdown rendering
- Syntax highlighting
- Environment variable management
- CORS configuration
- Frontend/backend integration
- Git and GitHub workflow
- Vercel deployment
- Render deployment
- MongoDB Atlas integration
- Debugging production deployment issues

---

# 🐛 Development & Debugging Notes

Some practical issues addressed during development include:

### CORS Configuration

The production backend must allow requests from the deployed Vercel frontend.

```env
FRONTEND_URL=https://merngpt-puce.vercel.app
```

### Frontend API URL

The frontend should not use the local backend URL after deployment.

Local:

```env
VITE_API_URL=http://localhost:8080
```

Production:

```env
VITE_API_URL=https://merngpt-backend.onrender.com
```

### Static Assets

Vite assets inside `src/assets` should be imported into React components instead of using a development-style path such as:

```jsx
<img src="src/assets/blacklogo.png" />
```

Use an import:

```jsx
import blackLogo from "./assets/blacklogo.png";

<img src={blackLogo} alt="MERNGPT Logo" />
```

This ensures Vite correctly processes the asset during production builds.

---

# 🚧 Future Improvements

## AI & Backend

- Local LLM support using Ollama
- AI provider abstraction
- Streaming AI responses
- Conversation context and memory
- Improved prompt management
- Better error handling
- Request validation
- Rate limiting

## RAG

- PDF/document upload
- Document text extraction
- Chunking and preprocessing
- Embedding generation
- FAISS/vector database integration
- Retrieval-Augmented Generation
- Source citations
- Document-aware conversations

## Application

- User authentication
- User-specific conversations
- Rename conversations
- Search conversations
- Chat export
- File attachments
- Profile/settings functionality
- Conversation sharing

## Engineering

- Automated testing
- API documentation
- Docker support
- CI/CD pipeline
- Structured logging
- Monitoring
- Improved production error reporting

---

# 🔒 Security Notes

- Store secrets in environment variables.
- Keep `.env` files out of Git.
- Never expose `GEMINI_API_KEY` in frontend code.
- Never commit MongoDB credentials.
- Keep API keys on the backend.
- Configure CORS for the intended frontend origin.
- Validate and sanitize user input as the application grows.
- Add authentication and authorization before supporting private user data.

---

# 📌 Project Status

**Status:** Deployed and under active development

The current version provides a functional full-stack AI chat application with:

- React/Vite frontend
- Express backend
- MongoDB Atlas persistence
- Gemini-powered responses
- Conversation history
- Thread deletion
- Markdown and code rendering
- Vercel frontend deployment
- Render backend deployment

Future development will focus on local LLM integration, RAG, document-based knowledge retrieval, authentication, and production-grade engineering.

---

# 👨‍💻 Author

**Rudrapratapsinh Chauhan**

**MERN Stack & AI/ML Developer**

Built as a learning and experimentation project focused on full-stack application development and AI application engineering.

---

## ⭐ Acknowledgement

This project is intended for learning, experimentation, and portfolio development. It demonstrates how a React frontend, Node.js/Express backend, MongoDB database, and AI API can be combined into a complete AI-powered web application.
