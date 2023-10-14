// 콜백함수로 이루어진 코드를 Promise로 변경하기

// ---------- callback 지옥 ----------
// function call(name, cb) {
//   setTimeout(function () {
//     console.log(name);
//     cb(name);
//   }, 1000);
// }

// function back(cb) {
//   setTimeout(function () {
//     console.log('back');
//     cb('back');
//   }, 1000);
// }

// function hell(cb) {
//   setTimeout(function () {
//     cb('callback hell');
//   }, 1000);
// }

// call('kim', function (name) {
//   console.log(name + '반가워');
//   back(function (txt) {
//     console.log(txt + '을 실행했구나');
//     hell(function (message) {
//       console.log('여기는 ' + message);
//     });
//   });
// });

// ---------- promise로 변경 ----------
// function call(name) {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       console.log(name);
//       resolve(name); // resolve() : then 메서드 실행
//     }, 1000);
//   });
// }

// function back() {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       console.log('back');
//       resolve('back');
//     }, 1000);
//   });
// }

// function hell() {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       let hell = 'hell';
//       resolve('callback hell');
//     }, 1000);
//   });
// }

// call('kim')
//   .then((result) => {
//     console.log(result + '반가워');
//     then 안에서 promise객체를 반환하게 되면, 체이닝을(.then) 할 수 있다
//     return back(result);
//   })
//   .then((result) => {
//     console.log(result + 'back');
//     return hell(result);
//   })
//   .then((result) => {
//     console.log('여기는 ' + result);
//   });

// ------- (promise) async / await 과 함께 사용 -------
function call(name) {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log(name);
      resolve(name); // resolve() : then 메서드 실행
    }, 1000);
  });
}

function back() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log('back');
      resolve('back');
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve) => {
    setTimeout(function () {
      let hell = 'hell';
      resolve('callback hell');
    }, 1000);
  });
}

// call('kim')
//   .then((result) => {
//     console.log(result + '반가워');
//     return back(result);
//   })
//   .then((result) => {
//     console.log(result + 'back');
//     return hell(result);
//   })
//   .then((result) => {
//     console.log('여기는 ' + result);
//   });

async function exec() {
  // call 의 resolve 인자로 넘겨준 값이 res1에 담기게 된다. res1 = 'kim'
  const res1 = await call('kim');
  console.log(res1, '반가워');
  // call 의 resolve 인자로 넘겨준 값이 res2에 담기게 된다. res2 = 'back'
  const res2 = await back();
  console.log(res2, '을 실행했구나');
  // call 의 resolve 인자로 넘겨준 값이 res3에 담기게 된다. res3 = 'callback hell'
  const res3 = await hell();
  console.log('여기는', res3);
}

exec();
