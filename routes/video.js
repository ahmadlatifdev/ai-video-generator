const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.json({ message: 'Video generated successfully!' });
});

module.exports = router;

