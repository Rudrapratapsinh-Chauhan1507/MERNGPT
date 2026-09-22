# MERNGPT

A full-stack AI chat application built with the MERN stack, inspired by modern conversational AI interfaces.

MERNGPT is a learning-focused project developed to explore full-stack application development, REST APIs, MongoDB persistence, React state management, and AI API integration. The project is designed as an original implementation rather than a direct ChatGPT clone.

---

## 🚀 Features

### 💬 Chat

- Start a new conversation with a unique thread ID
- Send prompts through the React frontend
- Receive AI-generated responses through the backend
- Display conversations in a ChatGPT-inspired interface

### 🗂️ Conversation Management

- Automatically save conversations in MongoDB
- View previously created conversations
- Open and read existing chat threads
- Delete saved conversations
- Highlight the currently selected conversation

### 📝 AI Response Rendering

- Markdown rendering for AI responses
- Syntax highlighting for code blocks
- Support for structured AI-generated content
- Loading indicator while waiting for responses

### 🖥️ User Interface

- Sidebar-based conversation history
- New Chat functionality
- Responsive chat workspace
- Profile section for future account/settings functionality

---

## 🛠️ Tech Stack

### Frontend

- **React**
- **Vite**
- **React Context API**
- **react-markdown**
- **rehype-highlight**
- **highlight.js**
- **react-spinners**
- **UUID**

### Backend

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **dotenv**
- **CORS**

### AI

- **Google Gemini API**
- Gemini OpenAI-compatible Chat Completions endpoint

---

## 🏗️ Architecture

```text
                    MERNGPT
                       │
             ┌─────────┴─────────┐
             │                   │
          Frontend            Backend
             │                   │
           React              Express
             │                   │
             │            ┌──────┴──────┐
             │            │             │
             │        MongoDB       Gemini API
             │            │             │
             └────────────┴─────────────┘
```

### Request Flow

```text
User
  │
  ▼
React Frontend
  │
  │ POST /api/chat
  ▼
Express Backend
  │
  ├── Find/Create Thread
  │
  ├── Store User Message
  │
  ├── Send Prompt to Gemini
  │
  ├── Store AI Response
  │
  ▼
MongoDB
  │
  ▼
Response
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
│   ├── package.json
│   └── server.js
│
├── Frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Chat.jsx
│   │   ├── ChatWindow.jsx
│   │   ├── MyContent.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

# ⚙️ Getting Started

## Prerequisites

Make sure the following are installed:

- Node.js
- npm
- MongoDB or a MongoDB Atlas account
- A Google Gemini API key

---

## 1. Clone the Repository

```bash
git clone <your-repository-url>
cd MERNGPT
```

---

## 2. Install Backend Dependencies

```bash
cd Backend
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file inside the `Backend` directory:

```env
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=your_gemini_model_name
```

Example:

```env
GEMINI_MODEL=your-model-name
```

> Do not commit your `.env` file or expose your API key publicly.

---

## 4. Start the Backend

From the `Backend` directory:

```bash
npx nodemon server.js
```

Or:

```bash
node server.js
```

The backend runs on:

```text
http://localhost:8080
```

---

## 5. Install Frontend Dependencies

Open a new terminal:

```bash
cd Frontend
npm install
```

---

## 6. Start the Frontend

```bash
npm run dev
```

Vite will usually start the frontend at:

```text
http://localhost:5173
```

Open the displayed URL in your browser.

---

# 🔌 API Endpoints

Base URL:

```text
http://localhost:8080/api
```

### Get All Threads

```http
GET /thread
```

Returns saved conversations ordered by their latest update.

---

### Get a Specific Thread

```http
GET /thread/:threadId
```

Returns the messages belonging to a specific conversation.

---

### Send a Chat Message

```http
POST /chat
```

Request:

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

---

### Delete a Thread

```http
DELETE /thread/:threadId
```

Deletes the specified conversation from MongoDB.

---

# 🔐 Environment Variables

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB connection string |
| `GEMINI_API_KEY` | API key used for Gemini |
| `GEMINI_MODEL` | Gemini model used for generating responses |

> Store environment variables in `Backend/.env`. Never commit API keys or database credentials to GitHub.

---

# 🧠 What I Learned

This project was built to strengthen practical understanding of:

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
- Git and GitHub workflow
- Environment variable management
- Full-stack application integration

---

# 🚧 Future Improvements

The project can be extended with:

### AI & Backend

- Local LLM support using Ollama
- AI provider abstraction
- Streaming AI responses
- Conversation context/memory
- Better prompt management

### RAG

- PDF/document upload
- Document text extraction
- Embedding generation
- Vector database integration
- Retrieval-Augmented Generation (RAG)
- Source citations

### Application

- User authentication
- User-specific conversations
- Rename conversations
- Search conversations
- Chat export
- File attachments
- Better error handling
- Request validation

### Engineering

- Automated testing
- API documentation
- Docker support
- CI/CD pipeline
- Logging and monitoring
- Production deployment

---

# 🔒 Security Notes

- API keys are stored using environment variables.
- `.env` files are excluded from Git using `.gitignore`.
- Never expose Gemini API keys in frontend code.
- Never commit database credentials to the repository.

---

# 📌 Project Status

**Current Status:** Active development

The current version implements the core MERN chat application with MongoDB-based conversation persistence and Gemini-powered AI responses.

Future versions will explore locally hosted LLMs, RAG, document-based knowledge retrieval, and additional AI capabilities.

---

# 👨‍💻 Author

**Rudrapratapsinh Chauhan**

MERN Stack & AI/ML Developer

Built as a learning and experimentation project for full-stack development and AI application engineering.
