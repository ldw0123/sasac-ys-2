const bcrypt = require('bcrypt');

const salt = 10; // 암호화에 사용할 salt의 수준을 사용 (정수)

function bcryptPw(pw) {
  return bcrypt.hashSync(pw, salt);
}

function comparePw(pw, dbPw) {
  // pw: 입력한 pw, dbPw: db에 있는 암호화된 값
  return bcrypt.compareSync(pw, dbPw);
}
const dbPw = bcryptPw('1234');

console.log('pw pw: ', dbPw); // $2b$10$5u5Ao2MJiugKjCXnBaTij.OIdwvTP0jbvAHZBMSJC0kRsTdeCUb0.
console.log('compare pw: ', comparePw('1234', dbPw)); // true
console.log(bcryptPw('1234')); // $2b$10$cRGmGwDDsU17SPNz/7.JPe59f68NegM1zNBkN/CRCWgU0EkBokR9O
