import Message from "../models/message.model.js";

export const socketConnection = (io) => {
  io.on("connection", (socket) => {
    console.log("🟢 User connected:", socket.id);

    socket.on("send-message", async (data) => {
      const newMsg = new Message({ sender: data.sender, content: data.content });
      await newMsg.save();

      io.emit("receive-message", newMsg); // Broadcast to all
    });

    socket.on("disconnect", () => {
      console.log("🔴 User disconnected:", socket.id);
    });
  });
};
