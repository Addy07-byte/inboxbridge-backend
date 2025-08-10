
#  InboxBridge Backend

A TypeScript + Node.js backend API that simulates BRM’s email assistant system — capable of accepting incoming user messages and preparing them for classification and storage.

This project is being actively developed to demonstrate my skills for backend software engineering roles, particularly in AI-driven B2B platforms.

---

##  Features (Completed So Far)

- ✅ Built with **TypeScript**, **Express.js**, and **Node.js**
- ✅ Created a working `POST /messages` endpoint
- ✅ Accepts sender, subject, body, and category fields
- ✅ In-memory storage of messages (for now)
- ✅ Tested via REST client and `curl`
- ✅ Auto-restart dev server with `nodemon`
- ✅ Project documented using this `README.md`

---

##  Tech Stack

- **Node.js** – runtime environment
- **TypeScript** – type safety and bug catching
- **Express.js** – web framework for building APIs
- **Nodemon** – auto-reloads server during development

---

##  API Overview

### `POST /messages`

**Request Body:**

```json
{
  "sender": "legal@company.com",
  "subject": "Contract renewal",
  "body": "Please review and sign.",
  "category": "legal"
}
````

**Response:**

```json
{
  "message": "Message received!",
  "data": {
    "sender": "...",
    "subject": "...",
    "category": "...",
    "timestamp": "..."
  }
}
```

---

## 📂 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Addy07-byte/inboxbridge-backend.git
cd inboxbridge-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

### 4. Test using curl

```bash
curl -X POST http://localhost:3000/messages \
  -H "Content-Type: application/json" \
  -d '{ "sender": "user@example.com", "subject": "Test", "body": "Hello", "category": "info" }'
```

---

## Roadmap (Next Steps)

* [ ] Replace in-memory storage with **PostgreSQL**
* [ ] Create a `messages` table and connect using `pg`
* [ ] Add `GET /messages` endpoint to retrieve all messages
* [ ] Integrate OpenAI/Gemini to auto-categorize messages
* [ ] Deploy to Render/Supabase or Railway
* [ ] Add basic front-end interface (React or HTML)

---

##  Motivation

This project is inspired by a real-world AI assistant product in the B2B workflow automation space
This project simulates an AI-powered message assistant for B2B workflows — inspired by real job descriptions focused on automating legal, finance, and inbox-related tasks using Node.js, TypeScript, and PostgreSQL.

---

## License

MIT License





