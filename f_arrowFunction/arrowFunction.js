// 例：特徴
// オブジェクトからfunctionを呼び出すとそれぞれのmessageで定義した内容が表示。
window.message = "Hello";

function showMessage() {
  console.log(this.message);
}

let message1 = {
  message: "message1",
  function: showMessage,
};

let message2 = {
  message: "message2",
  function: showMessage,
};

message1.function(); // message1
message2.function(); // message2

// 例：特徴
// 先ほどと実行結果が異なり、どちらもグローバル変数に設定したHelloが表示されました。
window.message = "Hello";

// 👇ここから書き換える
let showMessage = () => {
  console.log(this.message);
};
// 👆ここまで書き換える

let message11 = {
  message: "message1",
  function: showMessage,
};

let message22 = {
  message: "message2",
  function: showMessage,
};

message1.function(); // Hello
message2.function(); // Hello

// 実例
// 本来であればthisはprofileを指しており,
// this.textで呼び出しても問題ないように見えます。
// しかしコールバック関数の中でのthisはprofileを参照しているわけではないので、エラーになってしまう。

const profile = {
  hobbies: ["旅行", "読書", "ジム"],
  text: "趣味",
  showMessage: function () {
    return this.hobbies.map(function (hobby) {
      return console.log(`${this.text}は${hobby}です。`);
    });
  },
};
profile.showMessage();
// 趣味はundefinedです。
// 趣味はundefinedです。
// 趣味はundefinedです。

// 実例
// 以下のようにアロー関数にすることで、thisをprofileに指定できる。
const profile2 = {
  hobbies: ["旅行", "読書", "ジム"],
  text: "趣味",
  showMessage2: function () {
    return this.hobbies.map((hobby) => {
      return console.log(`${this.text}は${hobby}です。`);
    });
  },
};
profile.showMessage2();
// 趣味は旅行です。
// 趣味は読書です。
// 趣味はジムです。

// 実例
// 会員コードから条件に当てはまる種別を取り出したいとします。
// アロー関数だと可読性がより上がる
const memberShips = [
  { code: "001", name: "無料会員" },
  { code: "002", name: "スタンダード会員" },
  { code: "003", name: "プレミアム会員" },
];
const memberShip = memberShips.filter(
  (memberShip) => memberShip.name === "無料会員"
);
console.log(memberShip);
// [{code: "001", name: "無料会員"}]

// 問題からの解答
const doubleNumber = (number) => number * 2;
doubleNumber(10); // 20
