const crypto = require('crypto');

function createHashedPw(pw) {
  // crypto.createHash('알고리즘').update(실제 패스워드).digest('인코딩 방식')
  return crypto.createHash('sha512').update(pw).digest('base64');
}

console.log('pw 1234: ', createHashedPw('1234'));
console.log('pw 5678: ', createHashedPw('5678'));

// 입력한 비밀번호
const input = '5678';
// 암호화 된 비밀번호
const db_pw =
  'Cm+euqVeIc4nC23y59gSyYfVEasEctJLUBYitYePnksDARNW88n4WwhM92Oplak/FC1RB/qaktjmDnjTyWphSg==';

console.log('compare result: ', createHashedPw(input) == db_pw); // true
