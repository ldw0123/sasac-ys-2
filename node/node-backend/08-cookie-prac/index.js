const express = require('express');
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(cookieParser());

const cookieConfig = {
  httpOnly: true,
  maxAge: 24 * 60 * 60 * 1000,
};

app.get('/', (req, res) => {
  const noPopop = req.cookies.popup;
  res.render('index', { noPopop });
});

app.post('/setCookie', (req, res) => {
  res.cookie('popup', 'y', cookieConfig);
  res.send({ result: true });
});

app.listen(port, () => {
  console.log('Server Port : ', port);
});
