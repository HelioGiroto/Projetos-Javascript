    function criaPlanilha() {
            let dados = JSON.parse(localStorage.getItem("todasPesquisas2"))
            let tamanho = dados.length
            console.log(tamanho)
            document.querySelector(".tabela").classList.remove("oculta")
            let a, cel = []
            let linha
            let tab = document.getElementById("tabela")

            dados.forEach(
                // cada a são notas de um cada aluno:
                a => {
                    linha = tab.insertRow(-1)
                    // cada a é um array, com 15 valores:
                    for (let i = 0; i <= 17; i++) {
                        cel[i] = linha.insertCell(i)
                        cel[i].innerHTML = a[i]
                    }
                }
            )
        }


        criaPlanilha()


        // ABAIXO
        // O USUÁRIO AO CLICAR EM QUALQUER LINHA (TR) DA TABELA, O SISTEMA DARÁ O NRO DA LINHA PARA QUE SE POSSA ALTERAR NO LOCALSTORAGE!!!!
        // Não é possivel deletar a linha 0 - de cabeçalho!! ver linha 287 do código:

        // remove a linha 0 - do cabeçalho:
        document.querySelector("table").deleteRow(0)
        //linhas[0].remove()

        // obtem numa nodelist todos os tr:
        let linhas = document.querySelectorAll("tr")

        let nomeId

        // Dá uma id individual a cada linha (tr) da tabela
        // Solução para o Chrome do Mac:
        linhas.forEach((a, b) => {
            nomeId = `linha${b}`
            a.id = nomeId
            a.addEventListener("click", () => console.log(a.rowIndex) )
            // a.addEventListener("click", () => {console.log(a.rowIndex); console.log(a.innerText)} )
        })

        // o mesmo que tr.rowIndex
        // ERRO: linhas.addEventListener("click", (a)=> {console.log(a.rowIndex)} )
