/*
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 * セクション3: 便利メソッドmap
 * このセクションには以下の内容が含まれています：
 * 目次：
 * 7. 便利メソッドmap
 * 8. 続・便利メソッドmap
 * ⭐️演習３：オブジェクトの配列から興味のある値だけを引き抜く
 * ⭐️演習4：mapで演算
 * ⭐️応用問題 ⭐️ - pluckの実装
 * ⭐️応用問題２ ⭐️ - pluckの実装
 * ⭐️応用問題３ ⭐️ - pluckの実装
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

/*
 * ⭐️応用問題 ⭐️ - pluckの実装＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */

/*
 * 「pluck関数」を実装してみましょう。
 * pluck関数とは「オブジェクトの配列」と「プロパティ名を表す文字列」を受付けて、
 * 渡したプロパティの値だけを含んだ配列を返します。
 *
 */
function pluck(array, property) {
  // 指定されたプロパティの値を返す
  return array.map(function (element) {
    return element[property];
  });
}

var colorObjects = [{ color: "赤" }, { color: "青" }, { color: "黄色" }];

var colorNames = pluck(colorObjects, "color"); // "color" プロパティを抽出

console.log(colorNames); // ["赤", "青", "黄色"]

/*
 * ⭐️応用問題２ ⭐️ - pluckの実装＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */

/*
 * pluck関数とは、あるオブジェクトの配列から特定のプロパティを抜き取ってくる
 */
function pluckImages(array, property) {
  // 指定されたプロパティの値を返す
  return array.map(function (element) {
    return element[property];
  });
}

var images = [
  { height: "34px", width: "39px" },
  { height: "54px", width: "19px" },
  { height: "83px", width: "75px" },
];

var widths = pluckImages(images, "width"); // "width" プロパティを抽出
// 結果: ["39px", "19px", "75px"]

var heights = pluckImages(images, "height");
// 結果: ["34px", "54px", "83px"]

function createImages(widths, heights) {
  return widths.map(function (element, index) {
    return { width: element, height: heights[index] };
  });
}

/*
 * ⭐️応用問題３ ⭐️ - pluckの実装＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */

/*
 * pluck === pick関数とは、あるオブジェクトの配列から特定のプロパティ値を抜き取ってくる関数
 */
function pluckmemberProperty1(array, property) {
  // 指定されたプロパティの値を返す
  return array.map(function (element) {
    return element[property];
  });
}

var members = [
  { name: "田中", age: "28", address: "東京都" },
  { name: "佐藤", age: "22", address: "埼玉県" },
  { name: "山田", age: "35", address: "千葉県" },
];

var membersName = pluckmemberProperty1(members, "name");
// 結果: ["田中", "佐藤", "山田"]

var membersName = pluckmemberProperty1(members, "age");
// 結果: ["28", "22", "35"]

var membersName = pluckmemberProperty1(members, "address");
// 結果: ["東京都", "埼玉県", "千葉県"]
