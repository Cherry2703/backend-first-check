const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Basic GET route
app.get('/get', (req, res) => {
  res.json({ message: "Hello, this is your GET response backend check 1 :----!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
