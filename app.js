const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/delay', (req, res) => {
  setTimeout(() => {
    res.send('Response after 0.3 second');
  }, 300);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
