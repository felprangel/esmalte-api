const express = require("express");
const dotenv = require("dotenv");
const esmalteRoutes = require("./routes/esmalteRoutes");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/", esmalteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
