const express = require('express');
const app = express();
const videoRoutes = require('./routes/video');

app.use(express.json()); // important for parsing JSON
app.use('/api/video', videoRoutes); // uses the router exported from routes/video.js

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
