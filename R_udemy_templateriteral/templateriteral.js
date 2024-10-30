/*
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 * セクション9: テンプレートリテラル
 * このセクションには以下の内容が含まれています：
 * 目次：
 * 26. テンプレートリテラル
 * ⭐️演習19.テンプレートリテラルを使ってみよう
 * ⭐️演習20.氏名ヘルパー関数を作ってみよう
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */

/*
 * 26. テンプレートリテラル＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
function getMessage() {
  const year = new Date().getFullYear();
  return `今年は${year}年です`;
}
console.log(getMessage()); // 今年は2024年です

/*
 * ⭐️演習19.テンプレートリテラルを使ってみよう＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 *
 * テンプレートリテラルを使ってみよう
 * 次の関数で、テンプレートリテラルを使うようにリファクタしてください。
 *
 */
function doubleMessage(number) {
  return number + "を2倍すると" + 2 * number + "になります";
}

function doubleMessageTemplate(number) {
  return `${number}を2倍すると${2 * number}になります`;
}
doubleMessageTemplate(2); // "2を2倍すると4になります"

/*
 * ⭐️演習20.氏名ヘルパー関数を作ってみよう＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 *
 * 次の関数をテンプレートリテラルを使ってリファクタしてください。
 *
 */
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function fullName2(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

/*
 * ECサイトで使用されそうなテンプレートリテラルの例
 */
function productDescription(productName, price) {
  return `${productName}は税込み価格${price}円です。`;
}

console.log(productDescription("ノートパソコン", 150000)); // "ノートパソコンは税込み価格150000円です。"
