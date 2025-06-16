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

