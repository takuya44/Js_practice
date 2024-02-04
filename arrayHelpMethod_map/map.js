// mapメソッドは、配列の要素を1つずつ取り出して、その要素を引数にしてコールバック関数を呼び出し、その戻り値を集めた新しい配列を返します。
var numbers = [10, 20, 30];
var result = numbers.map(function (number) {
  return number * 2;
});
console.log(result); // [20, 40, 60]

// 注意点:returnを書き忘れると、新しい配列にはundefinedが入ります。
var numbers = [10, 20, 30];
var result = numbers.map(function (number) {
  number * 2;
});
console.log(result); // [undefined, undefined, undefined]

// 実例
var members = [
  { name: "田中", age: "28", address: "東京都" },
  { name: "佐藤", age: "22", address: "埼玉県" },
  { name: "山田", age: "35", address: "千葉県" },
];

var membersName = members.map(function (member) {
  return member.name;
});
console.log(membersName); // ["田中", "佐藤", "山田"]

// 問題
// mapを使ってlists内の金額と個数のそれぞれの合計金額を求めてみましょう。
// 結果はresultに格納してconsoleに結果を表示させます。
var lists = [
  { price: 100, quantity: 8 },
  { price: 180, quantity: 5 },
  { price: 320, quantity: 4 },
];

var result = lists.map(function (liset) {
  return liset.price * liset.quantity;
});
console.log(result); // [800, 900, 1280]

// 別問題
var fruits = [
  { name: "banana", price: 100, quantity: 8 },
  { name: "mikan", price: 180, quantity: 5 },
  { name: "nashi", price: 320, quantity: 4 },
];

var result;

result = fruits.map(function (fruit) {
  if (fruit.price >= 200) {
    return fruit.name;
  }
  return fruit.price * fruit.quantity;
});
console.log(result);
// ["nashi", 900, 1280]
