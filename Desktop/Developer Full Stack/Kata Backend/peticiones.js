/*const autor = require('gabriel garcia marquez');

autor.get('http://openlibrary.org/search.json?author=gabriel%20garcia%20marquez')
  .then(function ({ data }) {
    // handle success
    console.log(autor.tittle('El amor en tiempos de colera'));

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });*/

  const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://openlibrary.org/search.json?author=gabriel%20garcia%20marquez");

xhr.send(data);



  