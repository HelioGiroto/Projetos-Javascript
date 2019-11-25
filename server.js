// criando um servidor mais simples possível:
// fonte: https://www.w3schools.com/nodejs/default.asp

const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>OK</h1>")
  res.end('Servidor Ativo!!!');
}).listen(3000);				// era 8080.

// abra o navegador em localhost:3000
