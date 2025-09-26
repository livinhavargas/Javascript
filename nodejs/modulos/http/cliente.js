//importa o módulo http
import http from 'http';

http.get('http://jsonplaceholder.typicode.com/todos/2', (res) => {
  let data  = '';

  //um pedaço de dado foi recebido 
  res.on('data', (chunk) => {
    data += chunk;
    });

    //a resposta completa foi recebida
    res.on('end', () => {
        console.log(JSON.parse(data));
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});