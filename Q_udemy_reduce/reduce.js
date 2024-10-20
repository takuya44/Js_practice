/*
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 * セクション7: 便利メソッドreduce
 * このセクションには以下の内容が含まれています：
 * 目次：
 * 21.reduceでリストを集約
 * 22. さらにreduce
 * ⭐️⭐️⭐️23. reduceの面白い使い方
 * 演習14.走行距離を求めよう
 * ⭐️演習15.reduceでプロパティを集約
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */

/*
 * 21.reduceでリストを集約＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
// for文でリストの合計を計算
var numbers = [10, 20, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
// 結果: 60

// reduceメソッドでリストの合計を計算
numbers.reduce(function (sum, number) {
  return sum + number;
}, 0);
// 結果: 60

/*
 * 22. さらにreduce＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

primaryColors.reduce(function (previous, primaryColor) {
  previous.push(primaryColor.color);
  return previous;
}, []);
// 結果: ["red", "yellow", "blue"]
// 注意： reduceメソッドは、第2引数に初期値を指定することができます。
// pushは、破壊的メソッドだが、reduceメソッドは新しい配列を返すので、reduceメソッド内であれば破壊的メソッドを使っても問題ない。

/*
 * ⭐️⭐️⭐️23. reduceの面白い使い方＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
function balancedParens(string) {
  return !string.split("").reduce(function (previous, char) {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      return ++previous;
    }
    if (char === ")") {
      return --previous;
    }
    return previous;
  }, 0);
}
balancedParens("()"); // true: 正しいバランス
balancedParens("(())"); // true: 正しいバランス
balancedParens("(()"); // false: バランスが取れていない
balancedParens(")("); // false: 最初に閉じ括弧が出てきた

// ⭐️メモ1：splitメソッド
string.split(""); // 文字列を配列に変換
// split("") は、JavaScript の String メソッドで、文字列を指定した区切り文字で分割し、結果を配列として返します。
// 区切り文字として空文字列 "" を指定すると、文字列の各文字を 1 文字ずつに分割し、配列として返します。
"hello".split("");
// 結果: ['h', 'e', 'l', 'l', 'o']

// ⭐️メモ2：!演算子
// 詳細な説明
// 0 は JavaScript では「falsy」とされる値の一つです。
// → !0 は true に変換されます。
// 1 や -1 など、0以外の数値は「truthy」とされる値です。
// → !1 や !-1! を適用すると、false に変換されます。
console.log(!0); // true
console.log(!1); // false
console.log(!-1); // false
console.log(!42); // false
console.log(!""); // true （空文字列は falsy）
console.log(!"hello"); // false （非空文字列は truthy）

/*
 * 演習14.走行距離を求めよ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 *
 *「reduce」を使って走行距離の合計を求めてください。
 * 結果は「totalDistance」という変数に格納してください。
 *
 */
var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance = trips.reduce(function (sum, trip) {
  return trip.distance + sum;
}, 0);
// 結果: 47

/*
 * ⭐️演習15.reduceでプロパティを集約＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 *
 * 仕事場の通常のデスク（sitting）とスタンディングデスク（standing）の数を「reduce」を使って集計します。
 * 結果は「{ sitting: 3, standing: 2 }」の形にしてください。
 * 初期値は既に設定済みです。
 *
 * ヒント：「reducer」の中で集計していくオブジェクトを
 * 「return」するのを忘れないこと！（コールバック関数の第一引数です）
 *
 */
var desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" },
];

var deskTypes = desks.reduce(
  function (acc, desk) {
    // 三項演算子で書いて
    desk.type === "sitting" ? acc.sitting++ : acc.standing++;

    return acc;
  },
  { sitting: 0, standing: 0 }
);
// 結果: { sitting: 3, standing: 2 }

/*
 * ⭐️⭐️⭐️演習16.unique関数を作ってみよう＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 *
 * 配列の中の重複した要素を除外する「unique」という関数を作ってください。
 *
 * 例えば、以下のように動作します：
 * var numbers = [1, 1, 2, 3, 4, 4];
 * 上の配列があった場合、結果は
 * [1, 2, 3, 4]
 *
 * ヒント：「reduce」と「find」を使います。
 */
var numbers16 = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return array.reduce(function (acc, number) {
    if (!acc.includes(number)) {
      acc.push(number);
    }
    return acc;
  }, []);
}
unique(numbers16);
// 結果: [1, 2, 3, 4]

function unique2(array) {
  return array.reduce(function (acc, number) {
    if (acc.indexOf(number) === -1) {
      acc.push(number);
    }
    return acc;
  });
}
unique2(numbers16);
// 結果: [1, 2, 3, 4]

function unique3(array) {
  return array.reduce(function (acc, element) {
    var existingElement = acc.find(function (target) {
      return target === element;
    });

    if (!existingElement) {
      acc.push(element);
    }

    return acc;
  }, []);
}
unique3(numbers16);
// 結果: [1, 2, 3, 4]

// 余談：Setオブジェクトを使う方法
function unique4(array) {
  return [...new Set(array)];
}
console.log(unique4(numbers16));
// 結果: [1, 2, 3, 4]
