/*
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 * セクション3: 便利メソッドmap
 * このセクションには以下の内容が含まれています：
 * 目次：
 * 7. 便利メソッドmap
 * 8. 続・便利メソッドmap
 * ⭐️演習３：オブジェクトの配列から興味のある値だけを引き抜く
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

/*
 * ⭐️演習３：オブジェクトの配列から興味のある値だけを引き抜く＝＝＝＝＝＝＝＝＝＝
 */

/*
 * mapを使って配列内のオブジェクトの「height」だけを取得し、
 * 新しい配列を作成してください。
 *
 * その新しい配列は「heights」という変数に格納してください。
 * 「return」キーワードを忘れないように！
 */
var images = [
  { height: "34px", width: "39px" },
  { height: "54px", width: "19px" },
  { height: "83px", width: "75px" },
];

var heights = images.map(function (image) {
  return image.height;
});
// 結果: ["34px", "54px", "83px"]

/*
 * ⭐️演習4：mapで演算＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */

/*
 * mapを使って、距離と時間からそれぞれの旅行(trips)での速度を求めてください。
 *
 * 計算式は「距離(distance) / 時間(time)」となります。
 * 結果の配列を「speeds」という変数に格納してください。
 *
 */
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];

var speeds = trips.map(function (trip) {
  return trip.distance / trip.time;
});
// 結果: [3.4, 1.8, 2.36]
