/*
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 * セクション10: アロー関数
 * このセクションには以下の内容が含まれています：
 * 目次：
 * 28. アロー関数
 * 29. 続・アロー関数
 * 30. アロー関数の使いどころ
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */

/*
 * 28. アロー関数＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
// ES5
const add = function (a, b) {
  return a + b;
};
add(1, 2); // 3

// ES6
const add2 = (a, b) => a + b;
add2(1, 2); // 3

/*
 * 29. 続・アロー関数＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
const numbers = [1, 2, 3];
const doubleNumbers = numbers.map((number) => 2 * number);
console.log(doubleNumbers); // [2, 4, 6]

/*
 * 30. アロー関数の使いどころ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
const team = {
  members: ["太郎", "花子"],
  teamName: "スーパーチーム",
  teamSummary: function () {
    var self = this;
    return this.members.map(function (member) {
      return member + "は" + self.teamName + "の所属です。";
    }, this);
  },
};
console.log(team.teamSummary());

const team2 = {
  members: ["太郎", "花子"],
  teamName: "スーパーチーム",
  teamSummary: function () {
    return this.members.map(
      (member) => `${member}は${this.teamName}の所属です。`
    );
  },
};
console.log(team.teamSummary());
//
