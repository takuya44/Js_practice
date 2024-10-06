/*
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 * セクション4: 便利メソッドfilter
 * このセクションには以下の内容が含まれています：
 * 目次：
 * 11. filterでの絞り込み
 * 12. 続・filterで値の絞り込み
 * 13. filterの使いどころ：comments,postで同じIDのものを絞り込む
 * ⭐️コーディング演習６：値の条件付き絞り込み
 * ⭐️コーディング演習7：filterで権限の管理
 * ⭐️コーディング演習8：応用問題：「reject」を実装してみよう
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */

/*
 * 11. filterでの絞り込み＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
// forメソッド：フルーツだけを取り出す
// デメリット：何をしているのかがわかりにくい、長い
var products = [
  { name: "きゅうり", type: "野菜" },
  { name: "バナナ", type: "フルーツ" },
  { name: "セロリ", type: "野菜" },
  { name: "オレンジ", type: "フルーツ" },
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === "フルーツ") {
    filteredProducts.push(products[i]);
  }
}
// 結果: [{ name: "バナナ", type: "フルーツ" }, { name: "オレンジ", type: "フルーツ" }]

/*
 * 12. 続・filterで値の絞り込み＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
// filter
var products2 = [
  { name: "きゅうり", type: "野菜", quantity: 0, price: 1 },
  { name: "バナナ", type: "フルーツ", quantity: 30, price: 10 },
  { name: "セロリ", type: "野菜", quantity: 10, price: 15 },
  { name: "オレンジ", type: "フルーツ", quantity: 100, price: 5 },
];

// 種類が野菜かつ、在庫が０以上かつ、料金が10より小さい商品を絞り込む
products2.filter(function (product) {
  return product.type === "野菜" && product.quantity > 0 && product.price < 10;
});
// 結果: [{ name: "セロリ", type: "野菜", quantity: 10, price: 15 }]
// 注意： filterメソッドは、条件に合致する要素を集めた新しい配列を返します。

/*
 * 13. filterの使いどころ：comments,postで同じIDのものを絞り込む＝＝＝＝＝＝＝＝＝＝
 */
// filter
var post = { id: 4, title: "初めての投稿" };
var comments = [
  { postId: 4, content: "いい記事ですね" },
  { postId: 3, content: "勉強になりました" },
  { postId: 4, content: "なるほど" },
];

function commentsForPost(post, comments) {
  return comments.filter(function (comment) {
    return comment.postId === post.id;
  });
}
var filterdComment = commentsForPost(post, comments);
// 結果: [{ postId: 4, content: "いい記事ですね" }, { postId: 4, content: "なるほど" }]

/*
 * ⭐️コーディング演習６：値の条件付き絞り込み＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 *
 * 数字の配列があるので、50より大きい数字だけに絞り込んで
 * 新しい配列に格納してください。
 *
 * 新しい配列の変数名は「filteredNumbers」としてください。
 * あのメソッドを使うときにreturnを忘れずに！
 */
// filter
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers;
filteredNumbers = numbers.filter(function (number) {
  return number > 50;
});
// 結果: [55, 65, 75, 85, 95]

/*
 * ⭐️コーディング演習7：filterで権限の管理＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 *
 * ユーザーオブジェクトの配列から、
 * 管理者権限（admin）をもっているユーザーだけに絞り込んでください。
 *
 * 結果の配列は「filteredUsers」という変数に格納してください。
 * あのメソッドを使うときに「return」をお忘れなく！
 */
var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
];

var filteredUsers;
filteredUsers = users.filter(function (user) {
  return user.admin === true;
  // これでもいける：
  // return user.admin;
});
// 結果: [{ id: 1, admin: true }, { id: 5, admin: true }]

/*
 * ⭐️コーディング演習8：応用問題：「reject」を実装してみよう⭐️＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 *
 * 応用問題です！「reject」という関数を作ってください。
 *
 * 「reject」は「filter」とは逆の動作をします。
 * 関数が「true」を返した場合は、結果の配列に含まないようにしてください。
 *
 * ヒント：filterを使ってもOKです
 */

// 使用例：
var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function (number) {
  return number > 15;
});
lessThanFifteen; // 結果: [10]

// 実装意味不明
function reject(array, iteratorFunction) {
  return array.filter((element) => {
    return !iteratorFunction(element);
  });
}

// 解説
/**
 * reject関数は、与えられた配列の中から特定の条件に合わない要素を取り除いた新しい配列を返す関数です。
 *
 * @param {Array} array - 対象となる配列。
 * @param {Function} iteratorFunction - 各要素に対して評価を行う関数。この関数がtrueを返す場合、その要素は新しい配列に含まれません。
 * @returns {Array} - 条件に合わない要素を含む新しい配列。
 */
function reject(array, iteratorFunction) {
  return array.filter((element) => {
    // iteratorFunctionがtrueを返した要素を除外する
    return !iteratorFunction(element);
  });
}

// 使用例:
const numbers = [1, 2, 3, 4, 5];

// 偶数を除外する
const oddNumbers = reject(numbers, (n) => n % 2 === 0);

console.log(oddNumbers); // [1, 3, 5]
