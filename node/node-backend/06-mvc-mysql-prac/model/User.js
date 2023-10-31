const mysql = require('mysql');
const cnn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234qwer',
  database: 'sesac_test',
});

exports.post_signup = (data, cb) => {
  const sql = `insert into user (userid, name, pw) values ('${data.userid}', '${data.username}', '${data.userpw}')`;
};

exports.post_signin = (data, cb) => {};
exports.get_user = (id, cb) => {};

exports.update_profile = (data, cb) => {};
exports.delete_user = (id, cb) => {};
