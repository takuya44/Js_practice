// 問題for
function handleMovies1() {
  var movies = [
    { id: 1, title: "Harry Potter" },
    { id: 2, title: "Jaws" },
    { id: 3, title: "Titanic" },
  ];

  //👇forEach文に書き換える
  for (var i = 0; i < movies.length; i++) {
    addMovie(movies[i]);
  }
}

// 解答
function handleMovies2() {
  var movies = [
    { id: 1, title: "Harry Potter" },
    { id: 2, title: "Jaws" },
    { id: 3, title: "Titanic" },
  ];

  movies.forEach(function (move) {
    // addMovie(move);
    console.log(move);
  });
}

handleMovies2();
