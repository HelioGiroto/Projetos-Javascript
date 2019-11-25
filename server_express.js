// criando um servidor mais simples possível:
// fonte: https://www.w3schools.com/nodejs/default.asp

/*
const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>OK</h1>")
  res.end('Servidor Ativo!!!');
}).listen(3000);				// era 8080.

// abra o navegador em localhost:3000 ou http://127.0.0.1:3000/

// ver: https://stackoverflow.com/questions/16333790/node-js-quick-file-server-static-files-over-http


*/

// ===================================

// outra forma de montar um servidor: COM EXPRESS: 

// Montando servidor Node Js por meio do módulo EXPRESS:
const express = require('express')

const app = express()



app.listen(4000, () => {
	console.log("servidor funcionando - express - na porta 4000.")
})

// static files...

/*
// No caso de apenas retornar uma página branca com uma mensagem simples, basta:
app.get('/', (req,res) =>{
	res.send("<h1>JESUS CRISTO É O SENHOR!</h1>")
})
*/


// abaixo para carregar um arquivo no servidor:
app.get('/', (req,res) =>{
	res.sendFile(__dirname + '/lucas.html')
})

// https://expressjs.com/pt-br/starter/static-files.html
// https://www.youtube.com/watch?v=sh-NanMOh1Q&
// https://www.youtube.com/watch?v=BhvLIzVL8_o










