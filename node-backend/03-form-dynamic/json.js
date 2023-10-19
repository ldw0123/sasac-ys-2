const data = { name: 'lily', gender: '여자' };

const jsonData = JSON.stringify(data);
console.log('json: ', jsonData);

// 역직렬화 : 객체 형태로 출력
console.log('js object: ', JSON.parse(jsonData));
