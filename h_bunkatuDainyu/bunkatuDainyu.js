// 問題
const plans = [
  { plan: "free", price: 0 },
  { standard: "free", price: 1000 },
  { plan: "premium", price: 10000 },
];

const [p1, p2, p3] = plans;
const { plan, price, standard } = p1;
console.log(price); // 0

// 答え
const plansAnser = [
  { plan: "free", price2: 0 },
  { standard: "free", price2: 1000 },
  { plan: "premium", price2: 10000 },
];
// 👇ここからコードを変更する
const [{ price2 }] = plansAnser;
console.log(price2); // 0

// 分解
// const [price22] = plansAnser;
// console.log(price22); // { plan: 'free', price2: 0 }
// const { price2 } = price22;
// console.log(price2); // 0
