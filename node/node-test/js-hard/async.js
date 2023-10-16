// ⭐ 비동기 처리 Asynchronous

// 1️⃣ 콜백 함수 callback
function goMart() {
  console.log('마트에 가서 어떤 음료를 살 지 고민한다');
}

let product;
let price;

function pickDrink(callback) {
  setTimeout(function () {
    console.log('고민 끝!!!');
    (product = '제로 콜라'), (price = 2000);
    callback(product, price); // 콜백함수
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

goMart();
pickDrink(pay); // pay() 함수를 인자로 넘긴다. ()괄호 X
console.log();

// 2️⃣ promise
function goMart() {
  console.log('마트에 가서 어떤 음료를 살 지 고민한다');
}

let product2;
let price2;

function pickDrink() {
  setTimeout(function (resolve, reject) {
    setTimeout(function () {
      console.log('고민 끝!!!');
      product2 = '제로 콜라';
      price2 = 2000;
      resolve(true);
    }, 3000);
  });
}

function pay(product2, price2) {
  console.log(`상품명: ${product2}, 가격: ${price2}`);
}

goMart();
pickDrink().then(() => {
  pay(product2, price2);
});

// 3️⃣ async / await
function goMart() {
  console.log('마트에 가서 어떤 음료를 살 지 고민한다');
}

let product3;
let price3;

function pickDrink() {
  setTimeout(function (resolve, reject) {
    setTimeout(function () {
      console.log('고민 끝!!!');
      product3 = '제로 콜라';
      price3 = 2000;
      resolve(true);
    }, 3000);
  });
}

function pay(product3, price3) {
  console.log(`상품명: ${product3}, 가격: ${price3}`);
}

// goMart();
// pickDrink().then(() => {
//   pay(product3, price3);
// });

async function exec() {
  goMart();
  await pickDrink();
  pay(product, price);
}

exec();
