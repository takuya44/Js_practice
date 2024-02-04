// 問題
var characters = [
  { id: 1, name: "Mickey", type: "Disney" },
  { id: 2, name: "Minnie", type: "Disney" },
  { id: 3, name: "Totoro", type: "GHIBLI" },
  { id: 4, name: "Donald", type: "Disney" },
];
var result;

result = characters.some(function (character) {
  return character.type === "GHIBLI";
});
console.log(result); // => true
