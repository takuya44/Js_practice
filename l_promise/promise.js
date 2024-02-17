// Promise.all：複数の非同期処理を同時に実行し、すべての処理が終了したあとに別の処理を行うことが可能。
// それぞれ別のPromiseを作成する
const promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve();
  }, 300);
}).then(() => {
  console.log("promise1終了！");
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve();
  }, 500);
}).then(() => {
  console.log("promise2終了！");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve();
  }, 1000);
}).then(() => {
  console.log("promise3終了！");
});

// Promise.allを使って、3つのpromiseを同時に実行している
Promise.all([promise1, promise2, promise3]).then(() => {
  console.log("promise全て終了！");
});

// Promise.race
// Promise.allとは違い、最初に終了したもののみを返す
const promise11 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "promise1終了!");
});

const promise22 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "promise2終了!");
});

Promise.race([promise11, promise22]).then((value) => {
  console.log(value); // promise2終了!
});

// 実例
const fetchApi = fetch("https://jsonplaceholder.typicode.com/todos/1");

fetchApi
  .then((response) => {
    // 成功した場合の処理
    console.log(response.json);
    // {
    //  "userId": 1,
    //  "id": 1,
    //  "title": "delectus aut autem",
    //  "completed": false
    // }
  })
  .catch((error) => {
    // 失敗した場合の処理
  });

// 問題
new Promise((resolve, reject) => {
  resolve().then(() => {
    console.log("成功！");
  });
  reject().catch(() => {
    console.log("失敗！");
  });
});

// 解答
new Promise((resolve, reject) => {
  // resolve() or reject()
})
  .then(() => {
    console.log("成功！");
  })
  .catch(() => {
    console.log("失敗！");
  });
