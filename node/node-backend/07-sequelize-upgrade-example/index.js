const express = require('express');
const app = express();
const PORT = 8001;
const router = require('./routes');
const { sequelize } = require('./models');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

sequelize
  // force: true; 서버 실행마다 테이블 재생성
  // force: false; 서버 실행시 테이블 없으면 생성
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log('Database connection succeeded!');
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
