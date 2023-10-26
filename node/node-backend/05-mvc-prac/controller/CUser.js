const User = require('../model/User');
// User = { getUser: () => {} }

exports.main = (req, res) => {
  res.render('index'); // index.ejs render
};

exports.login = (req, res) => {
  // const id = 'lily';
  // const pw = '12345';
  const UserData = User.getUser(); // User 객체의 getUser()메서드 실행
  // userData = {id: "lily", pw: "12345"}
  let data;
  if (req.body.userid == UserData.id && req.body.password == UserData.pw) {
    data = {
      isSuccess: true,
      msg: '로그인 성공!',
    };
  } else {
    data = {
      isSuccess: false,
      msg: '로그인 실패!',
    };
  }
  // console.log(req.body);
  res.send(data);
};
