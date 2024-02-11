// スプレッド構文
// 通常の配列なので要素の追加も簡単
const team1 = ["田中", "山田", "鈴木"];
const team2 = ["加藤", "佐藤"];
console.log(["松本", ...team1, ...team2]);
// ["松本", "田中", "山田", "鈴木", "加藤", "佐藤"]

// 実例
// 説明
// パラメーターを作成する処理があったとします。
// generateParams関数にいくつかの引数を渡し、レスト構文で受け取り展開します。
// またisOptionがtrueだったら、スプレッド構文でパラメーターを追加しています。
let defaultParam = [];
function generateParams(...args) {
  for (const param of args) {
    defaultParam.push(param);
  }
}
generateParams("param1=1", "param2=2", "param3=3", "param4=4");

// スプレッド構文
let parameters = [...defaultParam];
console.log(parameters);
// ["param1=1", "param2=2", "param3=3", "param4=4"]

const isOption = true;
if (isOption) {
  parameters = [...parameters, `optionParams=true`];
}
console.log(parameters);
// ["param1=1", "param2=2", "param3=3", "param4=4", "optionParams=true"]

// joinメソッドは、配列のすべての要素を連結し、新しい文字列を生成する。
const test = parameters.join("&");
console.log(test);
// param1=1&param2=2&param3=3&param4=4&optionParams=true

// 問題:スプレッド構文
// 配列を結合する関数があります。
// concatを使っていますが、スプレッド構文を使ってリファクタリングしてみましょう。
function joinArray(array1, array2) {
  return array1.concat(array2);
}
console.log(joinArray([1, 2, 3], [4, 5, 6]));
// [1, 2, 3, 4, 5, 6]

function joinArray2(array11, array22) {
  return [...array11, ...array22];
}
console.log(joinArray([1, 2, 3], [4, 5, 6]));
// [1, 2, 3, 4, 5, 6]

// 問題:レスト構文
// 受け取った引数を合計する関数があります。
// いくつでも引数を渡せるようにレスト構文を使ってリファクタリングしてみましょう。
function sum(a, b, c, d, e) {
  const numbers = [a, b, c, d, e];
  return numbers.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3, 4, 5));
// 15

const sum2 = (...args) => {
  return args.reduce((previous, current) => {
    return previous + current;
  });
};
console.log(sum2(1, 2, 3, 4, 5));
// 15
