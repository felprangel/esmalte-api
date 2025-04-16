const express = require("express");
const router = express.Router();
const {
  gerarNomeDoEsmalte,
  gerarCorDoEsmalte,
} = require("../services/iaService");

router.post("/nome-do-esmalte", async (req, res) => {
  const { hex } = req.body;
  try {
    const nome = await gerarNomeDoEsmalte(hex);
    res.json({ nome });
  } catch (error) {
    res.status(500).json({ erro: "Erro ao gerar nome do esmalte" });
  }
});

router.post("/cor-do-esmalte", async (req, res) => {
  const { nome } = req.body;
  try {
    const hex = await gerarCorDoEsmalte(nome);
    res.json({ hex });
  } catch (error) {
    res.status(500).json({ erro: "Erro ao gerar cor do esmalte" });
  }
});

module.exports = router;
