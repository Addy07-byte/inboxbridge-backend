
````md
# InboxBridge Backend

A TypeScript + Node.js backend API that accepts user messages and prepares them for classification and storage — inspired by tools like BRM’s assistant system.

## Features

- `POST /messages` – Accepts sender, subject, body, and category
- Basic input validation
- In-memory message storage (PostgreSQL integration coming next)
- Fully tested with `curl` and REST clients

## Tech Stack

- Node.js
- TypeScript
- Express.js

## Getting Started

1. Clone the repository
2. Run `npm install`
3. Start the server:
   ```bash
   npm run dev
````

4. Test the endpoint:

   ```bash
   curl -X POST http://localhost:3000/messages \
     -H "Content-Type: application/json" \
     -d '{"sender": "user@example.com", "subject": "Test", "body": "Hello world", "category": "legal"}'
   ```

## Future Roadmap

* [ ] Store messages in PostgreSQL
* [ ] Add `GET /messages` route
* [ ] Integrate OpenAI for auto-categorization
* [ ] Add simple frontend or Postman collection

## License

MIT

```

---

Would you like me to generate this as a `README.md` file and give you the copy-paste version?
```
