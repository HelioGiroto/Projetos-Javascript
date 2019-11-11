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


// Para visualizar tais registros salvos, tem que abrir o Inspetor do Navegador e na aba Application procurar em LocalStorage > file:...


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

// Como gravar Dados do Formulario para o localStorage 
// O script deve ser chamado ao FIM do <body>

	function gravacaoDados() {
		x = document.getElementById("x").value			// Sempre os valores de formulário dentro da função que os usa.
		y = Number( document.getElementById("y").value )	// no caso de valores numéricos
		// Foi colocado o if para evitar que se salve no localStorage objetos vazios.		
		if(x != "" && y != "") {
			item = new produto(x,y)
			lista1.push(item)
			localStorage.lista1 = JSON.stringify(lista1)
			// Após gravar, limpa os campos input:
			document.getElementById("x").value = ""
			document.getElementById("y").value = ""
		}
	}

	botao = document.getElementById("botao")
	botao.addEventListener("click", gravacaoDados)




// Download (backup) de localStorage em arquivo.json:

// Se necessita criar na pág HTML: 
//	1. botao disparador desta função abaixo.
//	2. um link <a> vazio para receber o url do blob para baixar os dados:

	 function exportaCSV() {
		// Pega o conteúdo do Web Storage (*SEM fazer JSON.parse):
		var arqBruto = localStorage.getItem('lista1')

		// Deste conteudo cria um Blob tipo arquivo CSV (aqui faz o parse automaticamente):
		var blob = new Blob([arqBruto], {type: "application/json"})	// poderia ser tb text/json
		//blob = "lista = " + blob	// iso seria opcional se não quisessemos fazer a restore dos dados futuramente.

		// Cria uma URL para baixar o arquivo CSV
		var url = URL.createObjectURL(blob)

		// Localiza uma tag <a> com id="baixar" no código HTML:
		var a = document.getElementById("link")
		// a.style.display = "block" 	// opcional - para somente aparecer o link agora.

		// Atribui a este botao um atributo URL  <a>
		a.href = url

		// Dá nome ao arquivo que será salvo na pasta Downloads (Atribui uma propriedade de nome de arquivo de exportação)
		a.download = "lista1.json"
	}

	btBaixar = document.getElementById("baixar")
	btBaixar.addEventListener("click", exportaCSV)


// Fazer RESTORE de arquivo para dentro do LocalStorage (RESTORE):
// Isso faz a aplicação abrir o arquivo JSON:



// ================================ //



/*
Para fazer restore:
	- chama a funcao criaElemento (ver abaixo),
	- Acrescente "bbb =" no inicio do arquivo lista1.json
	- Em seguida: //localStorage.lista1 = JSON.stringify(bbb)
*/


	function criaElemento() {
	  var tagScript = document.createElement('script')
	  tagScript.setAttribute('src', "lista1.json")	// Adiciona atributo com nome do arquivo json (mesmo diretório desta página.html)
	  document.body.appendChild(tagScript)		// Apenda um filho à <body>
	}

	// Apenda filho do final:  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild
	// Apenda filho no inicio: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_insertbefore





/*
// Para chamar a função RESTARURA criar um novo botão:
btRestaura = document.getElementById("restaura")
btRestaura.addEventListener("click", restoreJson)

*/




