/*
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 * セクション5: 便利メソッドfind
 * このセクションには以下の内容が含まれています：
 * 目次：
 * 14. 特定のデータを探すfind
 * 15. 続・特定のデータを探すfind
 * ⭐️演習９.管理者権限をもったユーザーを探そう
 * ⭐️演習10.残高から預金口座のアカウントを探そう
 * ⭐️⭐️⭐️演習11.応用問題：findWhere関数を作ってみよう
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */

/*
 * 14. 特定のデータを探すfind＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
// forメソッド
var users = [{ naem: "太郎" }, { name: "次郎" }, { name: "三郎" }];

var user;
for (var i = 0; i < users.length; i++) {
  if (users[i].name === "次郎") {
    user = users[i];
    break;
  }
}
// 結果: { name: "次郎" }

// findメソッド
var users2 = [{ naem: "太郎" }, { name: "次郎" }, { name: "三郎" }];

var user2;
user2 = users2.find(function (user) {
  return user.name === "次郎";
});
// 結果: { name: "次郎" }
// 注意： findメソッドは、条件に合致する最初の要素のみ返します。

/*
 * 15. 続・特定のデータを探すfind＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 */
var posts = [
  { id: 1, title: "古い投稿" },
  { id: 2, title: "新しい投稿11" },
  { id: 2, title: "新しい稿22222" },
];

var comment = { postId: 2, content: "いい記事ですね" };

function postForComment(posts, comment) {
  return posts.find(function (post) {
    return post.id === comment.postId;
  });
}

postForComment(posts, comment);
// 結果: { id: 2, title: "新しい投稿11" }
// 注意： findメソッドは、条件に合致する最初の要素のみ返します。

/*
 * ⭐️演習９.管理者権限をもったユーザーを探そう＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 *
 * ユーザーが入っている配列から管理者権限（admin）をもっているユーザーを探してください。
 * そのユーザーを「admin」という変数に格納してください。
 */
var users9 = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true },
];

var admin;
admin = find.users9(function (user) {
  return user.admin;
});
// 結果: { id: 3, admin: true }

/*
 * ⭐️演習10.残高から預金口座のアカウントを探そう＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 *
 * 預金残高（balance）が「12」のアカウントを探して
 * 「account」という変数に格納してください。
 */
var accounts10 = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

var account;
account = accounts10.find(function (account) {
  return account.balance === 12;
});
// 結果: { balance: 12 }

/*
 * ⭐️⭐️⭐️演習11.応用問題：findWhere関数を作ってみよう＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 *
 * この演習は難易度が高いです！ほとんどの場合findでは、
 * あるオブジェクトのプロパティがある値をもっているかどうかを探します。
 *
 * この処理をするために毎回コールバック関数を書くのは少し手間がかかりますよね。
 *
 * 例えば：findWhere(ladders, { height: '6m' });
 * 上のように書けたらコールバック関数を書かずにすむので便利です。
 * ここで { height: '6m' } は検索条件になります。
 * はしごの高さが6mのものを探したいときに使います。
 *
 * この演習では、上で使用した「findWhere」関数を実装してください。
 * 「findWhere」関数の戻り値は、検索条件に一致したオブジェクトになります。
 *
 * よって、下記のようになります。
 *
 * var ladders = [
 * { id: 1, height: 20 },
 * { id: 3, height: 25 }
 * ];
 *
 * findWhere(ladders, { height: 25 });
 * // result: { id:3, height: 25 }
 * ヒント：おそらく一番難しいのは検索条件のオブジェクトのキー名を取得するところです。
 * これは Object.keys(criteria)[0]  を使うことで、
 * オブジェクト内のキーを取得することができます。
 *
 * 例えば Object.keys({ height: '6m' }) とした場合、
 * 'height' が取得できます。
 * キーがわかったところで、対象となるオブジェクトにそのキーと値があるかどうかを
 * element[property] === criteria[property] で確認することができます。
 *
 */
function findWhere(array, criteria) {
  return array.find(function (element) {
    // オブジェクト内のキーを取得:[0] → 戻り値が配列なので、[0]で取得
    var property = Object.keys(criteria)[0];

    // オブジェクト内のキーと値が一致するかどうかを確認
    return element[property] === criteria[property];
  });
}

//練習
function findWhere2(array, criteria) {
  return array.find(function (element) {
    var propertyKey = Object.keys(criteria)[0];
    var propertyValue = Object.values(criteria)[0];
    return (
      element[propertyKey] === criteria[propertyKey] &&
      element[propertyKey] === propertyValue
    );
  });
}

var ladders = [
  { id: 1, width: 500, height: 20 },
  { id: 2, width: 500, height: 30 },
  { id: 3, width: 500, height: 25 },
];

findWhere(ladders, { height: 25 });
// 結果: { id: 2, width: 500, height: 30 }
findWhere2(ladders, { height: 25 });
// 結果: { id: 2, width: 500, height: 30 }
