array = [1,2,3,4,5,1].map((a,b)=> {if (a < 3){return b}})

console.log(array)

// como substiu undefine por "": linha 38-40

array=[1,2,3,4].map((a,b)=> {if(a<3) {console.log(b)}})

console.log()

// nao func.:
arr= [1,2,3,4].filter((a,b)=> {if(a<4){return b}})
console.log(arr)

console.log()

// horario de almoço de fulano no mês X:
fulano = [
"",
"12:33",
"14:00",
"13:01",
"12:27",
"",
"14:00",
"13:00",
"12:40",
"12:10",
"",
"",
"12:00"
]

// Na função abaixo:
// Mapeia o array de fulano buscando
// os dias que teve hora de almoço.
// Desta nova array, extrai só os elem
// != de undefined:

diasVale = fulano.map((hora,dia) => { if(hora!=""){return dia} }).filter(el=>el!=undefined)
// comente a de cima e des-comente as 2 abaixo:
//diasVale = []
//fulano.forEach((hora,dia) => {if(hora!=""){diasVale.push(dia)}})

console.log("Dias que almoçou:", diasVale)
console.log("Total de dias trabalhados:", diasVale.length, ".")


console.log()


diaHora = fulano.map((hora,dia) => {return [dia,hora]} )
//diaHora = fulano.map((hora,dia) => {return {dia : hora}} )
console.log(diaHora)
// Fulano[11][15]
// mes 11, dia 15
