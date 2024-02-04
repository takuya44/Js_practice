var fruits = [
  { name: "バナナ", stock: true },
  { name: "みかん", stock: false },
  { name: "いちご", stock: true },
  { name: "りんご", stock: false },
  { name: "すいか", stock: true },
];
var result;

resutlt = fruits.every(function (fruit) {
  return fruit.stock === true;
});
console.log(resutlt);
// 出力結果
// false
