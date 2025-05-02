// index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const { OpenAI } = require("openai");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Serve index.html at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Handle prompt processing
app.post("/process", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required." });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    const result = response.choices[0]?.message?.content?.trim();

    if (!result) {
      throw new Error("OpenAI returned an empty result.");
    }

    res.json({ result });
  } catch (error) {
    console.error("❌ Error processing prompt:", error.message);
    res.status(500).json({ error: "AI processing failed." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`✅ AI Video Generator running on http://localhost:${port}`);
});
