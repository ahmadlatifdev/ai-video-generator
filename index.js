const express = require('express');
const cors = require('cors');
const app = express();
const videoRoutes = require('./routes/video');

app.use(cors());
app.use(express.json());
app.use('/api/video', videoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`AI Generator running on port ${PORT}`);
});
