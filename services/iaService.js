const axios = require("axios");

const gerarNomeDoEsmalte = async (hex) => {
  const prompt = `Dê um nome criativo de esmalte para a cor hexadecimal ${hex}. Seja estiloso, moderno e divertido.`;
  const resposta = await enviarPromptParaIA(prompt);
  return resposta;
};

const gerarCorDoEsmalte = async (nome) => {
  const prompt = `Qual código hexadecimal melhor representa um esmalte com o nome "${nome}"? Responda apenas com o código, sem mais nada.`;
  const resposta = await enviarPromptParaIA(prompt);
  return resposta.replace(/[^#a-fA-F0-9]/g, "").substring(0, 7);
};

const enviarPromptParaIA = async (prompt) => {
  const resposta = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.8,
      max_tokens: 50,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return resposta.data.choices[0].message.content.trim();
};

module.exports = {
  gerarNomeDoEsmalte,
  gerarCorDoEsmalte,
};
