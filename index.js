const express = require("express");
const app = express();

app.use(express.json());

const users = [
  { id: 1,name:"Erberk",role : "student"},
  { id: 2,name:"Erbay",role : "student"},
]

app.get("/", (req, res) => {
  res.send("Backend calisiyor. Erberk basladi ✅");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

app.get("/about", (req, res) => {
  res.json({
    name: "Erberk",
    role: "Backend Developer (starting)",
    stack: ["Node.js", "Express"],
  });
});

app.get("/users/:id",(req,res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if(!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server calisiyor: http://localhost:3000");
});
