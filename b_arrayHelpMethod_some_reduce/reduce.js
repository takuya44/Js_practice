var numbers = [1, 2, 3];
var sum = numbers.reduce(function (previous, number) {
  return previous + number;
});
console.log(sum); // 6

// 実例
// 配列の中で最も年齢が高いメンバーを探す
var members = [
  { id: 1, name: "田中", age: 23 },
  { id: 2, name: "佐々木", age: 20 },
  { id: 3, name: "佐藤", age: 19 },
  { id: 4, name: "山本", age: 34 },
  { id: 5, name: "柳澤", age: 40 },
  { id: 6, name: "加藤", age: 29 },
];
var result = members.reduce(function (prev, member) {
  return prev.age > member.age ? prev : member;
});
console.log(result);
// => { id: 5, name: "柳澤", age: 40 }

// 問題
var fruits = [
  { name: "バナナ", price: 120 },
  { name: "みかん", price: 200 },
  { name: "いちご", price: 400 },
  { name: "りんご", price: 150 },
  { name: "すいか", price: 300 },
];
var result;

result = fruits.reduce(function (prev, fruit) {
  return (prev += fruit.price);
}, 0);
console.log(result);
// => 1170
// 処理の流れ
// 例えば、prevが0で、fruit.priceが120の場合、
// 0 + 120 = 120 が返る
// その後、prevに120が入る
// その後、prevが120で、fruit.priceが200の場合、
// 120 + 200 = 320 が返る

// 自作
const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);

// 結果
// > "accumulator: 15, currentValue: 16, index: 1, returns: 31"
// > "accumulator: 31, currentValue: 17, index: 2, returns: 48"
// > "accumulator: 48, currentValue: 18, index: 3, returns: 66"
// > "accumulator: 66, currentValue: 19, index: 4, returns: 85"
