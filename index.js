const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello From Node.js');
});
app.get('/contact', (req, res) => {
    res.send('The Contact Page');
});
app.get('/about', (req, res) => {
  res.send('The About Page');
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
