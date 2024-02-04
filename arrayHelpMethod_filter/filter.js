// 各membersのregisteredAddressの値を確認して、
// 住所登録済みのユーザーに絞り込むことができます。

var members = [
  { name: "田中", age: "28", registeredAddress: true },
  { name: "佐々木", age: "28", registeredAddress: false },
  { name: "佐藤", age: "22", registeredAddress: true },
  { name: "山本", age: "45", registeredAddress: true },
  { name: "柳澤", age: "21", registeredAddress: false },
  { name: "加藤", age: "34", registeredAddress: true },
];

function filteringRegisteredMembers() {
  return members.filter(function (member) {
    return member.registeredAddress === true;
  });
}
console.log(filteringRegisteredMembers());
// 出力結果
// [  { name: '田中', age: '28', registeredAddress: true },
//    { name: '佐藤', age: '22', registeredAddress: true },
//    { name: '山本', age: '45', registeredAddress: true },
//    { name: '加藤', age: '34', registeredAddress: true }
// ]

// 問題
var movies = [
  { id: 1, name: "Harry Potter", genre: "fantasy", release: 2001 },
  { id: 2, title: "Jaws", genre: "thriller", release: 1975 },
  { id: 3, title: "Monsters Inc", genre: "anime", release: 2002 },
  { id: 4, title: "Titanic", genre: "adventure", release: 1997 },
  { id: 5, title: "Minions", genre: "anime", release: 2015 },
];
var result;

result = movies.filter(function (movie) {
  return movie.release >= 2000;
});
console.log(result);
// 出力結果
// [ { id: 1, name: 'Harry Potter', genre: 'fantasy', release: 2001 },
//   { id: 3, title: 'Monsters Inc', genre: 'anime', release: 2002 },
//   { id: 5, title: 'Minions', genre: 'anime', release: 2015 }
// ]
