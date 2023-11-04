const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.use(
  session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
  })
);

app.get('/', (req, res) => {
  const user = req.session.user;

  if (user) {
    res.render('index', { isLogin: true, user: user });
  } else {
    res.render('index', { isLogin: false });
  }
});

app.get('/login', (req, res) => {
  req.session.user = 'lily';
  res.send(
    `<script>
        alert('로그인 성공');
        location.href='/';
    </script>`
  );
});

app.get('/logout', (req, res) => {
  req.session.destroy(function (err) {
    res.send(
      `<script>
            alert('로그아웃 성공');
            location.href='/';
        </script>`
    );
  });
});

app.listen(PORT, () => {
  console.log('Server Open: ', PORT);
});
