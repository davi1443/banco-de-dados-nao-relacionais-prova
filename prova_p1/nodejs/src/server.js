const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const PORT = 3000;
const usersDB = require("./models/User");

mongoose
  .connect(
    "mongodb+srv://Davi:sparks143@cluster0.dxxq2do.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Conexão com o mongodb estabelecida com sucesso");
  })
  .catch((error) => {
    console.log("Erro ao conectar o mongodb", error);
  });

app.use(express.json());
app.use("/api/users", userRoutes);
app.use(cors());

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = usersDB.findOne({ email, password });

  if (user) {
    res.send("Login feito com sucesso!");
  } else {
    res.status(401).send("Inválido");
  }
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "log", "login.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor está conectado na porta  ${PORT}`);
});
