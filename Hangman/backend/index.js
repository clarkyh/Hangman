const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

const data = require('./data.json');

app.use(cors());

app.get('/categories', (req, res) => {
  res.json(data.categories);
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
