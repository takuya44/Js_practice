/*
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 * セクション2: 便利メソッドforEach
 * 目次：
 * 4. 便利メソッドforEach
 * 5. 続・便利メソッドforEach
 * 6. なぜforEachを使うのか
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */

/*
 * 4. 便利メソッドforEach　＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
// for文
var colors = ["red", "blue", "green"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// forEachメソッド
colors.forEach(function (color) {
  console.log(color); // 結果: red, blue, green
});

/*
 * 5. 続・便利メソッドforEach　＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
// 数字の配列を用意
var numbers = [1, 2, 3, 4, 5];

// 合計値を保持する変数を用意
var sum = 0;

function adder(number) {
  sum += number;
}

// 配列の1つ1つの数字を合計に足す
numbers.forEach(adder); // NG: numbers.forEach(adder()); とすると、関数が実行されてしまう

// 合計値を表示
sum; // 結果: 15
