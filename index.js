const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend calisiyor. Erberk basladi ✅");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

app.listen(3000, () => {
  console.log("Server calisiyor: http://localhost:3000");
});

app.get("/about", (req, res) => {
  res.json({
    name: "Erberk",
    role: "Backend Developer (starting)",
    stack: ["Node.js", "Express"],
  });
});