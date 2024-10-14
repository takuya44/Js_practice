/*
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 * セクション6: 便利メソッドeveryとsome
 * このセクションには以下の内容が含まれています：
 * 目次：
 * 17,18.everyとsome
 * 19. everyとsomeの構文
 * ⭐️20. everyとsomeの使いどころ
 * ⭐️演習12.全員回答済みかどうか確認する
 * ⭐️演習13.通信中のリクエストの確認
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */

/*
 * 17,18.everyとsome＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
// forメソッド:デメリット:コードが長くなる
// data
var computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Acer", ram: 32 },
];

// すべて動かせるメソッド
var allComputersCanRun = true;

// 一部動かせるメソッド
var someComputersCanRun = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRun = false;
  } else {
    someComputersCanRun = true;
  }
}

// everyメソッド
computers.every(function (computer) {
  return computer.ram > 16;
});
// 結果: false

// someyメソッド
computers.some(function (computer) {
  return computer.ram > 16;
});
// 結果: true

/*
 * 19. everyとsomeの構文＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
var names = ["けん", "はなこ", "そういちろう"];

names.every(function (name) {
  return name.length > 3;
});
// 結果: false

names.some(function (name) {
  return name.length > 3;
});
// 結果: true

/*
 * ⭐️20. everyとsomeの使いどころ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
// コンストラクタ関数 Field
function Field(value) {
  this.value = value;
}

// Fieldのprototypeにvalidateメソッドを追加
Field.prototype.validate = function () {
  return this.value.length > 0;
};

var username = new Field("my_username");
var password = new Field("my_password");
var birthdate = new Field("my_birthdate");

// ⭐️everyメソッド用に配列に格納
var fields = [username, password, birthdate];

username.validate(); // 結果: true
password.validate(); // 結果: true

username.validate() && password.validate() && birthdate.validate();
// 結果: true
// 問題点: vaildateメソッドが増えるたびに、&&を追加しなければならない

var formIsVaild = fields.every(function (field) {
  return field.validate();
});

if (formIsVaild) {
  // サーバーにリクエストを送信
} else {
  // エラーを表示する
}

/*
 * ⭐️演習12.全員回答済みかどうか確認する＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 *
 * アンケートを生徒に配って回答状況が「users」配列に格納してあります。
 * 生徒が全員回答済みかどうかを確認して「hasSubmitted」変数に結果を格納してください。
 */
var users12 = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true },
];

var hasSubmitted;
hasSubmitted = users12.every(function (user) {
  return user.hasSubmitted;
});
// 結果: false
// 注意: everyメソッドは、配列内のすべての要素が条件を満たす場合にtrueを返します。

/*
 * ⭐️演習13.通信中のリクエストの確認＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 *
 * ネットワーク通信に関連するリソースが配列に格納してあります。
 *
 * 一つでも「status」が「pending」状態であれば「inProgress」変数に「true」が入るようにしてください。
 */
var requests = [
  { url: "/photos", status: "complete" },
  { url: "/albums", status: "pending" },
  { url: "/users", status: "failed" },
];

var inProgress = requests.some(function (request) {
  return request.status === "pending";
});
// 結果: true
// 注意: someメソッドは、配列内のいずれかの要素が条件を満たす場合にtrueを返します。
