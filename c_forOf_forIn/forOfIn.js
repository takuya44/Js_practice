// 実例
var MemberShips = ["無料会員", "スタンダード会員", "プレミアム会員"];
var target = document.getElementById("output");
target.innerHTML = "<ul>";

for (var memberShip of MemberShips) {
  target.innerHTML = target.innerHTML + "<li>" + memberShip + "</li> ";
}
target.innerHTML = target.innerHTML + "</ul>";

// 問題
var members = ["田中", "山中", "佐々木", "加藤"];

for (var member of members) {
  console.log(members);
}
// => 田中 山中 佐々木 加藤
