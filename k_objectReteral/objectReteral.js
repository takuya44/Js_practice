// 使い方
const color = "black";

const cat = {
  name: "Miro",
  color, // KeyとValueの変数が同じ場合はvalueを省略できる
  getName() {
    // functionを省略できる
    return this.name;
  },
};

console.log(cat.getName()); // Miro

// 省略記法を使っていないES2015以前の書き方
function createUser(name) {
  return {
    name: name,
    showProfile: function () {
      return this.name;
    },
  };
}

const user = createUser("鈴木");
console.log(user.showProfile()); // 鈴木
