const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Send all other requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000; // Use port 3000 for the frontend server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
