/*
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 * セクション8: constとlet
 * このセクションには以下の内容が含まれています：
 * 目次：
 * 演習17.constとlet変数を使い分けよう
 * 演習18.constとletでリファクタリング
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */

/*
 * 演習17.constとlet変数を使い分けよう＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 *
 * Facebookのプロフィールを管理するアプリを作っていると想定してください。
 *
 * プロフィールは「名前（name）」、「年齢（age）」、「誕生日（dateOfBirth）」の情報を持っているとします。
 * この3つの変数を、将来変わる可能性があるかどうかで「const」と「let」に分けて宣言してください。
 */
const name = "太郎";
let age = 20;
const dateOfBirth = "2016年1月1日";

/*
 * 演習18.constとletでリファクタリング＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 *
 * 次のコードでは変数の宣言に
 * 「const」、「let」ではなく、
 * 「var」を使っています。
 *
 * これらを「const」と「let」に置き換えてください。
 *
 * 変更する際に、再代入が発生するかどうかで
 * 「const」と「let」を使い分けるように意識してください。
 */
const statuses = [
  { code: "OK", response: "正常に完了しました" },
  { code: "FAILED", response: "エラーが発生しました" },
  { code: "PENDING", response: "処理中です..." },
];
let message = "";
const currentCode = "OK";

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
console.log(message);
//正常に完了しました

statuses.forEach((status) => {
  if (status.code === "FAILED") {
    message = status.response;
  }
});
console.log(message);
// エラーが発生しました
