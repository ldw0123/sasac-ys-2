const User = require('../model/User');

exports.index = (req, res) => {
  res.render('index');
};

// 회원가입 signup 페이지 랜더
exports.signup = (req, res) => {
  res.render('signup');
};

// 회원가입 post signup 요청
exports.post_signup = (req, res) => {
  User.post_signup(req.body, function () {
    res.send({ result: true });
  });
};

// signin 페이지 랜더 (로그인 페이지)
exports.signin = (req, res) => {
  res.render('signin');
};

// 회원가입 후 로그인 post signin 요청
exports.post_signin = (req, res) => {
  User.post_signin(req.body, function (rows) {
    console.log(rows[0]);
    if (rows.length > 0) res.send({ result: true, id: rows[0].id });
    else res.send({ result: false });
  });
};

// 프로필 페이지
exports.profile = (req, res) => {
  User.get_user(req.body.id, function (result) {
    console.log('profile', result);
    if (result.length > 0) res.render('profile', { data: result[0] });
    else res.redirect('/user/signin');
  });
};

// 프로필 페이지 수정
exports.profile_edit = (req, res) => {
  const data = {
    ...req.body,
    id: req.params.id,
  };
  User.update_profile(data, function () {
    res.send({ result: true });
  });
};

// 계정 탈퇴
exports.profile_delete = (req, res) => {
  User.delete_user(req.params.id, function () {
    res.send({ result: true });
  });
};
