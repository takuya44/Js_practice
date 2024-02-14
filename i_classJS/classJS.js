// 例
class Cat {
  constructor({ name }) {
    // const {name} = types;
    // 今回はCatクラスのconstructorでnameを引数としているため
    // superにtypeオブジェクトを引数として渡し、
    // constructor側では分割代入でnameを受け取っています。
    this.name = name;
  }

  sound() {
    return "にゃーん";
  }
}

// 継承
class Amesho extends Cat {
  constructor(types) {
    super(types);
    this.color = types.color;
  }

  meow() {
    return "みゃーみゃー";
  }
}

const amesho = new Amesho({ name: "タマ", color: "グレー" });
console.log(amesho); // Amesho { name: 'タマ', color: 'グレー' }
console.log(amesho.sound()); // にゃーん
console.log(amesho.meow()); // みゃーみゃー

// 実例
class GameManager {
  constructor() {
    this.characterList = [];
  }

  addCharacter(character) {
    this.characterList.push(character);
  }
}

// キャラクタークラス
class PlayerCharacter {
  constructor(name, hp, mp, attack) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.attack = attack;
  }
}

const chara1 = new PlayerCharacter("サトシ", 100, 10, 70, 100);
const chara2 = new PlayerCharacter("タケル", 100, 10, 60, 100);
const chara3 = new PlayerCharacter("プリン", 100, 30, 50, 100);

const gameManager = new GameManager();
gameManager.addCharacter(chara1); // これでcharacterListにchara1が追加される
gameManager.addCharacter(chara2); // これでcharacterListにchara2が追加される
gameManager.addCharacter(chara3); // これでcharacterListにchara3が追加される
// console.log(gameManager.characterList);
// [
//  PlayerCharacter { name: 'サトシ', hp: 100, mp: 10, attack: 70 },
//  PlayerCharacter { name: 'タケル', hp: 100, mp: 10, attack: 60 },
//  PlayerCharacter { name: 'プリン', hp: 100, mp: 30, attack: 50 }
// ]

// 問題
class MonsterCharacter {
  constructor(name, hp, mp) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.attack = 10;
  }
}

const monster1 = new MonsterCharacter("スライム", 10, 10);
const monster2 = new MonsterCharacter("ドラゴン", 200, 100);
const monster3 = new MonsterCharacter("ゴブリン", 50, 5);

const gameManager2 = new GameManager();
gameManager2.addCharacter(monster1);
gameManager2.addCharacter(monster2);
gameManager2.addCharacter(monster3);
console.log(gameManager2.characterList);
// [
//  MonsterCharacter { name: 'スライム', hp: 10, mp: 10, attack: 10 },
//  MonsterCharacter { name: 'ドラゴン', hp: 200, mp: 100, attack: 10 },
//  MonsterCharacter { name: 'ゴブリン', hp: 50, mp: 5, attack: 10 }
// ]

// 解答
// class MonsterCharacter {
//   👇ここからコードを書く
//   constructor(options) {
//     this.name = options.name;
//     this.hp = options.hp;
//     this.mp = options.mp;
//     this.attack = 10;
//   }
// }

// もしインスタンス化するなら
// const monster1 = new MonsterCharacter({ name: "スライム", hp: 10, mp: 10 });
