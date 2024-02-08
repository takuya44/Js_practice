// 問題
// 受け取った引数をもとにリダイレクトURL返す関数があります。
// テンプレート文字列を使ってリファクタリングをしましょう。
function redirectUrl(id, token) {
  return `/result/id=${id}&token=${token}`;
}
console.log(redirectUrl(1, "token123"));
// => "/result/id=1&token=token123"
