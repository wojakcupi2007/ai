const API_KEY = "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";
const prompt = document.querySelector("#busqueda");
const button = document.querySelector("#generate");
const res = document.querySelector("#res");

async function getCompletion(prompt) {
  const response = await fetch(`https://api.openai.com/v1/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: "informacion de la cancion o compositor de"+prompt,
      max_tokens: 150,

    }),
  });


button.addEventListener("click", async () => {
  const response = await getCompletion(prompt.value);
  res.innerHTML = response.choices[0].text;
});
