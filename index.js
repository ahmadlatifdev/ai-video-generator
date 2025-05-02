const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { OpenAI } = require('openai');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/process', async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    });

    const aiText = response.choices[0].message.content;
    res.json({ result: aiText });
  } catch (error) {
    console.error(error);
    res.status(500).send('AI processing failed.');
  }
});

app.listen(port, () => {
  console.log(`AI Video Generator server running on port ${port}`);
});
