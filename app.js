const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.post('/submit', (req, res) => {
  console.log(req.body.message);
  res.send('Success');
});

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User Profile for ID ${userId}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
