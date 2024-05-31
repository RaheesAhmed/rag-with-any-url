import express from "express";
import cors from "cors";
import { chatWithURL } from "./chat.js";

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get("/chat", (req, res) => {
  res.send({
    response:
      "Welcome to the **Chat with URL API**! This API uses various tools and libraries to fetch content from a URL, process it, and generate responses using OpenAI's language models. It supports both GET and POST requests.",
    parameters: {
      apikey: "string (required)",
      query: "string",
      url: "string",
      model: "string (optional)",
      temperature: "number (optional)",
      maxTokens: "number (  optional)",
      chunkSize: "number (optional)",
      chunkOverlap: "number (optional)",
    },
  });
});

app.post("/chat", async (req, res) => {
  const { query, url, model, temperature, maxTokens, chunkSize, chunkOverlap } =
    req.body;
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(400).send({
      error:
        "Authorization header missing or incorrect. It should be 'Bearer <openai-api-key>'.",
    });
    return;
  }
  const openAIKey = authHeader.split(" ")[1]; // Extract the token from the header
  console.log("Request Received", openAIKey, url, query);

  if (!query || !url) {
    res.status(400).send({
      error: "Please provide both a query and a URL.",
    });
    return;
  }

  //use openAIKey in your chatWithURL function
  const response = await chatWithURL({
    query,
    url,
    model,
    temperature,
    maxTokens,
    chunkSize,
    chunkOverlap,
    apiKey: openAIKey,
  });
  console.log("Response Recieved");
  res.send({ response: response });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
