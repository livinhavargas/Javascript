// server.js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Rota raiz");
  }
  else if (req.method === "GET" && req.url === "/sobre") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Rota sobre");
  }
  else if (req.method === "POST" && req.url === "/enviar") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Dados recebidos via POST");
  }
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Rota não encontrada");
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
