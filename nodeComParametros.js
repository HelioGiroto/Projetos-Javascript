// 1o. exemplo (+ simples):
process.argv.forEach(val => console.log("parametro passado: " + val))


// 2o. exemplo (forEach com dois parâmetros valor e index):
//process.argv.forEach( (val, nro) => console.log(`Parametro nro: ${nro}: ${val}`))


// 3o. exemplo:
// soma numeros dos argumentos passados na linha de comando do NodeJS:

/*
acum = 0
process.argv.slice(2).forEach( n => acum += Number(n) )

	// Tente sem o slice[2]:
	// process.argv.forEach( n => acum += n )

	// Usando dois comandos dentro de uma Arrow Function ( use {} depois de => ) :
	// process.argv.slice(2).forEach( n => {acum += Number(n); console.log(acum) })

console.log(acum)
*/

// ===================================================================================================

/* 
RESULTADO:	

// 1o. exemplo:

$ nodejs nodeComParametros.js Jesus Helio Fatima Bibita
	parametro passado: /usr/bin/node
	parametro passado: /home/h/Área de Trabalho/nodeComParametros.js
	parametro passado: Jesus
	parametro passado: Helio
	parametro passado: Fatima
	parametro passado: Bibita


// 2o. exemplo:

$ nodejs nodeComParametros.js Jesus Helio Fatima Bibita
	Parametro nro: 0 - /usr/bin/node
	Parametro nro: 1 - /home/h/Área de Trabalho/nodeComParametros.js
	Parametro nro: 2 - Jesus
	Parametro nro: 3 - Helio
	Parametro nro: 4 - Fatima
	Parametro nro: 5 - Bibita


// 3o. exemplo:

$ nodejs nodeComParametros.js 1 2 3 
6

*/
