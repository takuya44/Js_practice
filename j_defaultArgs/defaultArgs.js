// 実例
// 2015年以前の書き方
function findMemberShip(type, price) {
  if (!type) {
    type = "free";
  }
  if (!price) {
    price = "0円";
  }
  return type + price;
}
console.log(findMemberShip()); // free0円
console.log(findMemberShip("tak", "100円")); // tak100円

// 2015年以降の書き方
function findMemberShip(type = "free", price = "0円") {
  return type + price;
}
console.log(findMemberShip()); // free0円
console.log(findMemberShip("tak", "100円")); // tak100円
