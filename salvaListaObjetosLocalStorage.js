// Este Script só pode ser visualizado no LocalStorage do Navegador.
// Ele cria objetos (de nome produtos), apenas com nome e preço -
// ... e salva a lista de tais objetos na LocalStorage do navegador.
// Além disso, tb pega, carrega, chama (GET) os dados gravados para serem acessados posteriormente.

// É um exemplo clássico do uso de construção, criação e acesso de objetos JavaScript,
// como tb de adicionamento de objetos dentro de lista (arrays),
// como tb de gravação e acesso destes no LocalStorage: utilizando os métodos PARSE e STRINGFY de JSON:

// Autor: Hélio Giroto.


// Cria modelo/molde de produto:
	function produto(nome, valor) { 
		this.nome = nome; 
		this.valor = valor
	}

// Cria lista para armazenar produtos dentro:
	listaProdutos = []

// Começa a criar 3 produtos e apendá-los na lista:
	prod = new produto("tapete", 12.00)
	listaProdutos.push(prod)

	prod = new produto("toalha", 20.50)
	listaProdutos.push(prod)

	prod = new produto("papel hgienico", 12.50)
	listaProdutos.push(prod)


// Corrige o nome de um dos produtos:
	listaProdutos[2].nome = "papel higiênico"


// Salva lista de produtos em localStorage:
	localStorage.lista1 = JSON.stringify(listaProdutos)


// PAra visualizar tais registros salvos, tem que abrir o Inspetor do Navegador e na aba Aplication procirar


// ================================ //


// ACRESCENTA NOVOS REGISTROS (OBJETOS) NO LOCALSTORAGE (ATUALIZA - como update):

// Para resgatar (pegar, carregar) valores desde a localStorage:
	lista1 = JSON.parse(localStorage.getItem("lista1"))

// Cria novo produto:
	item = new produto("água", 8.00)

// Apenda esse novo produto na lista1 chamada do localStorage:
	lista1.push(item)

// Salva essa lista atualizada no localStorage:
	localStorage.lista1 = JSON.stringify(lista1)


// ================================ //


// Visualizar dados no console (experimente isso):
	console.table(lista1)

// Porém isso abaixo NÃO FUNCIONA...:
	console.log(localStorage.getItem("lista1"))

// Por quê ? Porque o que está em LocaStorage não foi PARSEado como JSON!! Mas -
// Mas é só um texto... para tanto, se usa, assim (abaixo) e funciona:
	console.table(JSON.parse(localStorage.getItem("lista1")))


// ================================ //



















