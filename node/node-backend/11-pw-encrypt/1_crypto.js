const crypto = require('crypto');

function createHashedPw(pw) {
  // crypto.createHash('알고리즘').update(실제 패스워드).digest('인코딩 방식')
  return crypto.createHash('sha512').update(pw).digest('base64');
}

console.log('pw 1234: ', createHashedPw('1234'));
console.log('pw 5678: ', createHashedPw('5678'));

// 입력한 비밀번호 (1234)
const input = '1234';
// 암호화 된 비밀번호 (pw 1234)
const db_pw =
  '1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w==';
// 비교
console.log('compare result: ', createHashedPw(input) == db_pw); // true

// 암호화 된 비밀번호 (pw 1234 with salt)
const dbPwSalt =
  '7RIE+s2ogWXFnHiWj52bv3LjU50FSMuMe/dimhu50lPo069jpO5IS2OyRr7lTEqlfCeWLV+h477Hw7sSYqe4pw==';
// 비교
console.log('compare result: ', createHashedPwWithSalt(input) == db_pw); // false

// salt 소금을 치는 함수
function createHashedPwWithSalt(pw) {
  const salt = crypto.randomBytes(16).toString('base64'); // salt 생성
  console.log('salt: ', salt);
  const iterations = 100; // 반복 횟수
  const keylen = 64; // 키의 길이
  const digest = 'sha512'; // 해시 알고리즘
  // 인자: 암호화할 문자열, salt값, 반복 횟수, 키의 길이, 알고리즘
  return crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, digest)
    .toString('base64');
}

console.log('pw 1234 with salt: ', createHashedPwWithSalt('1234'));
