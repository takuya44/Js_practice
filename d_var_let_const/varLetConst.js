// 実例
function filteringMemberShips(memberCode) {
  const memberShips = [
    { code: "001", name: "無料会員" },
    { code: "002", name: "スタンダード会員" },
    { code: "003", name: "プレミアム会員" },
  ];
  let result = "";

  for (let memberShip of memberShips) {
    if (memberShip.code === memberCode) {
      result = memberShip.name;
    }
  }
  return result;
}

console.log(filteringMemberShips("002")); // => "スタンダード会員"

// 問題
const members = [
  { name: "田中", age: "28", memberShip: "無料会員" },
  { name: "佐藤", age: "22", memberShip: "スタンダード会員" },
  { name: "山田", age: "35", memberShip: "プレミアム会員" },
];
const target = "佐藤";
let result = "";

for (let i = 0; i < members.length; i++) {
  // ❌惜しい：for (var i = 0; i < members.length; i++) {
  if (members[i].name === target) {
    result = members[i].memberShip;
  }
}
console.log(result); // => "スタンダード会員"
