import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('InboxBridge API is working 🚀');
});

// Step 1: In-memory message store (temporary)
const messages: any[] = [];

// Step 2: POST /messages route
app.post('/messages', (req, res) => {
  const { sender, subject, body, category } = req.body;

  // Step 3: Validation
  if (!sender || !subject || !body || !category) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Step 4: Create message object
  const newMessage = {
    id: messages.length + 1,
    sender,
    subject,
    body,
    category,
    timestamp: new Date()
  };

  // Step 5: Store the message
  messages.push(newMessage);

  // Step 6: Respond to client
  res.status(201).json({
    message: 'Message received!',
    data: newMessage
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
