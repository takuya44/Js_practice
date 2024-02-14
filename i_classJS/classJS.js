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
