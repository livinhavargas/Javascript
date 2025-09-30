import http from 'http';
// Cria um servidor HTTP
http.createServer((req, res) => {
  // Define o cabeçalho da resposta
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Envia a resposta "Olá Mundo :)!"
  res.end('Olá Mundo :)!');
  // Escuta na porta 8080
}).listen(8080);
// Mensagem no console
console.log('Servidor rodando em http://localhost:8080/');
