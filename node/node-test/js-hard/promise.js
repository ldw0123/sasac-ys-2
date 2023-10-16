// ⭐ 비동기 처리 Asynchronous

// promise
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      // flag가 true인 경우
      resolve(
        'promise 상태는 fulfilled!!! thread로 연결됩니다. \n이때의 flag가 true입니다'
      );
    } else {
      reject(
        'promise 상태는 rejected!!! catch로 연결됩니다. \n이때의 flag는 false입니다'
      );
    }
  });
}

// 특정 함수가 return하는 값이 promise 객체일 경우, 체이닝으로 then과 catch라는 메서드를 사용할 수 있다
promise1(true)
  .then((result) => {
    // result에는 resolve로 보낸 인자 값이 들어오게 된다.
    // 여기서는  '상태는 fulfilled!!! thread로 연결` 문자열
    console.log(result); // 실행됨
  })
  .catch((err) => {
    console.log(err);
  });

promise1(false)
  .then((result) => {
    // result에는 resolve로 보낸 인자 값이 들어오게 된다.
    // 여기서는  '상태는 fulfilled!!! thread로 연결` 문자열
    console.log(result);
  })
  .catch((err) => {
    console.log(err); // 실행됨
  });

// ---------- 콜백 지옥 예시 ----------
function add(n1, n2, cb) {
  setTimeout(function () {
    let result = n1 + n2;
    cb(result);
  }, 1000);
}

function mul(n, cb) {
  setTimeout(function () {
    let result = n * 2;
    cb(result);
  }, 700);
}

function sub(n, cb) {
  setTimeout(function () {
    let result = n - 1;
    cb(result);
  }, 500);
}

add(4, 3, function (x) {
  console.log('1: ', x);
  mul(x, function (y) {
    console.log('2: ', y);
    sub(y, function (z) {
      console.log('3: ', z);
    });
  });
});

// ---------- promise로 변경 ----------
function add(n1, n2) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result); // resolve() : then 메서드 실행
    }, 1000);
  });
}

function mul(n) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
      // reject('오류 발생');
    }, 700);
  });
}

function sub(n) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
    }, 500);
  });
}

add(4, 3)
  .then((result) => {
    console.log('1: ', result);
    return mul(result);
  })
  .then((result) => {
    console.log('2: ', result);
    return sub(result);
  })
  .then((result) => {
    console.log('3: ', result);
  })
  .catch((err) => {
    console.log(err);
  });

// ------- (promise) async / await 과 함께 사용 -------
function add(n1, n2) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
      // reject('오류 발생');
    }, 700);
  });
}

function sub(n) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
    }, 500);
  });
}

add(4, 3)
  .then((result) => {
    console.log('1: ', result);
    return mul(result);
  })
  .then((result) => {
    console.log('2: ', result);
    return sub(result);
  })
  .then((result) => {
    console.log('3: ', result);
  })
  .catch((err) => {
    console.log(err);
  });

// 1. async 키워드: 함수 앞에 붙어 promise를 반환한다
// 2. await 키워드: promise 앞에 붙여 promise가 다 처리될 때까지 기다리는 역할. async 함수 내부에서만 사용이 가능하다
async function exec() {
  const x = await add(4, 3); // x = 7
  console.log('1: ', x);
  const y = await mul(x); // y = 14
  console.log('2: ', y);
  const z = await sub(y); // z = 13
  console.log('3: ', z);
}

exec();
