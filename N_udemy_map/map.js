/*
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 * セクション3: 便利メソッドmap
 * このセクションには以下の内容が含まれています：
 * 目次：
 * 7. 便利メソッドmap
 * 8. 続・便利メソッドmap
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */

/*
 * 7. 便利メソッドmap　＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
// forメソッド
var numbers = [1, 2, 3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}
// mapメソッド
var doubled = numbers.map(function (number) {
  return number * 2;
});
// 結果: [2, 4, 6]
// 注意：
// mapメソッドは新しい配列を返すので、元の配列は変更されません。
// また、mapメソッドは引数に関数を取ります。この関数は、配列の各要素に対して実行されます。
// return忘れると、undefinedが返されるので注意。

/*
 *　8. 続・便利メソッドmap　＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
var cars = [
  { type: "軽自動車", price: "安い" },
  { type: "高級車", price: "高い" },
];

var prices = cars.map(function (car) {
  return car.price;
});
// 結果: ["安い", "高い"]