// import express from "express";
// import cors from "cors";
// import chatBotRouter from "./routes/chatbot.js";
//  // ✅ Load environment variables from .env


// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ✅ Use the chatbot route
// app.use("/api/chatbot", chatBotRouter);

// // ✅ Error-handling middleware
// app.use((err, req, res, next) => {
//   if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
//     console.error("❌ Bad JSON:", err.message);
//     return res.status(400).json({ success: false, message: "Invalid JSON payload" });
//   }
//   next();
// });

// app.listen(port, () => {
//   console.log(`🚀 Server is running on http://localhost:${port}`);
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatBotRouter from "./routes/chatbot.js";

dotenv.config(); // ✅ Load environment variables from .env

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "http://localhost:5173" })); // ✅ Adjust this based on frontend URL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Use the chatbot route
app.use("/api/chatbot", chatBotRouter);

// ✅ Error-handling middleware
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error("❌ Bad JSON:", err.message);
    return res.status(400).json({ success: false, message: "Invalid JSON payload" });
  }
  next();
});

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
