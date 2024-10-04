/*
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 * セクション4: 便利メソッドfilter
 * このセクションには以下の内容が含まれています：
 * 目次：
 * 11. filterでの絞り込み
 * 12. 続・filterで値の絞り込み
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */

/*
 * 11. filterでの絞り込み＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
// forメソッド：フルーツだけを取り出す
// デメリット：何をしているのかがわかりにくい、長い
var products = [
  { name: "きゅうり", type: "野菜" },
  { name: "バナナ", type: "フルーツ" },
  { name: "セロリ", type: "野菜" },
  { name: "オレンジ", type: "フルーツ" },
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === "フルーツ") {
    filteredProducts.push(products[i]);
  }
}
// 結果: [{ name: "バナナ", type: "フルーツ" }, { name: "オレンジ", type: "フルーツ" }]

/*
 * 12. 続・filterで値の絞り込み＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
// filter
var products2 = [
  { name: "きゅうり", type: "野菜", quantity: 0, price: 1 },
  { name: "バナナ", type: "フルーツ", quantity: 30, price: 10 },
  { name: "セロリ", type: "野菜", quantity: 10, price: 15 },
  { name: "オレンジ", type: "フルーツ", quantity: 100, price: 5 },
];

// 種類が野菜かつ、在庫が０以上かつ、料金が10より小さい商品を絞り込む
products2.filter(function (product) {
  return product.type === "野菜" && product.quantity > 0 && product.price < 10;
});
// 結果: [{ name: "セロリ", type: "野菜", quantity: 10, price: 15 }]
// 注意： filterメソッドは、条件に合致する要素を集めた新しい配列を返します。
