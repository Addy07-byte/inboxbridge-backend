import express from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('InboxBridge API is working 🚀');
});


// POST /messages  (create)
app.post("/messages", async (req, res) => {
  try {
    const { sender, subject, body, category } = req.body || {};

    // validation 
    if (!sender || !subject || !body || !category) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = await prisma.message.create({
      data: { sender, subject, body, category },
    });

    res.status(201).json({
      message: "Message received!",
      data: newMessage,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create message" });
  }
});

// (recommended) GET /messages  (list latest first)
app.get("/messages", async (_req, res) => {
  try {
    const items = await prisma.message.findMany({
      orderBy: { timestamp: "desc" },
      take: 100,
    });
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`API running at http://localhost:${port}`))