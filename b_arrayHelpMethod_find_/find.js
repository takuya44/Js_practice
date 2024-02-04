var members = [
  { id: 1, name: "田中", age: "28" },
  { id: 2, name: "佐々木", age: "28" },
  { id: 3, name: "佐藤", age: "22" },
  { id: 4, name: "山本", age: "45" },
  { id: 5, name: "柳澤", age: "21" },
  { id: 6, name: "加藤", age: "34" },
];

function getMemberIdParam() {
  return 1;
}

var memberId = getMemberIdParam();

var selectedMember = members.find(function (member) {
  return member.id === memberId;
});
console.log(selectedMember);
// 出力結果
// { id: 1, name: '田中', age: '28' }

// 問題
var members = [
  { id: 1, name: "田中", admin: false },
  { id: 2, name: "佐々木", admin: false },
  { id: 3, name: "佐藤", admin: false },
  { id: 4, name: "山本", admin: true },
  { id: 5, name: "柳澤", admin: false },
  { id: 6, name: "加藤", admin: false },
];
var result;

result = members.find(function (member) {
  return member.admin === true;
});
console.log(result);
// 出力結果
// { id: 4, name: '山本', admin: true }
