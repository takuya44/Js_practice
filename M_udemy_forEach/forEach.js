/*
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 * セクション2: 便利メソッドforEach
 * 目次：
 * 4. 便利メソッドforEach
 * 5. 続・便利メソッドforEach
 * 6. なぜforEachを使うのか:動画での説明のみ
 * ⭐️コーディング演習1:forループからの脱却
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

/*
 * ⭐️コーディング演習1:forループからの脱却　＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */

/*
 * forループからの脱却
 * 下のコードは savePost という関数を3回呼び出しています。
 * このコード自体は動くので機能としては問題はないのですが、
 * forループよりもforEachメソッドを使ってコードを読みやすくしたいです。
 * 下のコードをforEachを使うようにリファクタしてください。
 *
 * 注意： savePostという関数は定義済みだと考えてください（新たに定義する必要はありません）
 */
// forループ
function handlePosts() {
  var posts = [
    { id: 23, title: "JSニュース" },
    { id: 52, title: "リファクター・シティ" },
    { id: 105, title: "Rubyの良いところ" },
  ];

  for (var i = 0; i < posts.length; i++) {
    savePost(posts[i]);
  }
}

// forEachメソッド
function handlePosts2() {
  var posts = [
    { id: 23, title: "JSニュース" },
    { id: 52, title: "リファクター・シティ" },
    { id: 105, title: "Rubyの良いところ" },
  ];

  // NG:posts.forEach(savePost(post));
  // OK
  posts.forEach(function (post) {
    savePost(post);
  });
  // アロー関数でもOK
  // posts.forEach((post) => savePost(post));
}
