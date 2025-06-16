# 📡 Real-Time Chat App Backend (Socket.IO + Express + MongoDB)

A minimal backend setup for real-time chat using **Node.js**, **Express**, **Socket.IO**, and **MongoDB**.  
Includes a simple frontend in plain HTML + JS for quick testing.

---

## ⚙️ Tech Stack

- **Node.js** (Express)
- **MongoDB** (Mongoose)
- **Socket.IO**
- **REST APIs** for fetching stored messages
- **Dotenv**, **CORS**
- **Vanilla JS** for frontend testing

---

## 📁 Folder Structure

<pre>
chat-app-backend/
│
├── config/
│ └── db.js
│
├── controllers/
│ └── message.controller.js
│
├── models/
│ ├── user.model.js
│ └── message.model.js
│
├── routes/
│ └── message.routes.js
│
├── socket/
│ └── index.js
│
├── frontend/
│ └── index.html # Simple frontend for testing sockets
│
├── .env
├── server.js
├── package.json
└── .gitignore
</pre>

---

## 🛠️ Setup Instructions

### 1. Clone the Repo & Install Dependencies
```bash
npm install
```

### 2. Create a `.env` file using `.env.example`
   ```env
   MONGO_URI=your_mongo_connection_string
   PORT=5000
   ```

### 3. Start the Server
```bash
node server.js
```

---

## 📬 REST API

### 🔹 `GET /api/messages`  
Returns all saved chat messages.

```http
GET http://localhost:5000/api/messages
```

---

## 🔌 Socket.IO Events
✅ On Connection:
Logs connection ID on server.

### 🔹 send-message
Client emits:

```js
socket.emit("send-message", {
  sender: "Jeevan",
  content: "Hello World"
});
```

### 🔹 receive-message
Server broadcasts:

```js
socket.on("receive-message", (data) => {
  console.log(data); // { sender, content, timestamp }
});
```

---

## 💻 Frontend (Local Testing)
Included in frontend/index.html — open this in browser and test:

### 🧪 How to Use:
- Open frontend/index.html in Chrome or any browser.
- Type a message and click Send.
- You’ll see the real-time message show up in < ul > and saved to MongoDB.
- Open another browser window to test real-time multiple connections.

---
