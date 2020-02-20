// ESTE SCRIPT PROCURA/ALTERA UM REGISTRO DE UM ARQUIVO JSON
// AUTHOR: Helio Giroto

let arq = [{
    "dataVenda": "31/01/2020",
    "rv": "123000",
    "valorBruto": "1250",
    "valorLiquido": "1000",
    "taxaDesconto": "20%",
    "qtdeParcelas": "4",
    "bands": "Cup",
    "formaPgto": [{
        "data": "01/03/2020",
        "valor": "250.00",
        "nroParcela": "1/4",
        "id": "20200301.123000",
        "estado": "",
        "dataPgto": ""
    }, {
        "data": "31/03/2020",
        "valor": "250.00",
        "nroParcela": "2/4",
        "id": "20200331.123000",
        "estado": "",
        "dataPgto": ""
    }, {
        "data": "30/04/2020",
        "valor": "250.00",
        "nroParcela": "3/4",
        "id": "20200430.123000",
        "estado": "",
        "dataPgto": ""
    }, {
        "data": "30/05/2020",
        "valor": "250.00",
        "nroParcela": "4/4",
        "id": "20200530.123000",
        "estado": "",
        "dataPgto": ""
    }]
}, {
    "dataVenda": "31/01/2020",
    "rv": "00125",
    "valorBruto": "1100",
    "valorLiquido": "900",
    "taxaDesconto": "18.18%",
    "qtdeParcelas": "3",
    "bands": "American",
    "formaPgto": [{
        "data": "28/02/2020",
        "valor": "300.00",
        "nroParcela": "1/3",
        "id": "20200228.00125",
        "estado": "",
        "dataPgto": ""
    }, {
        "data": "28/03/2020",
        "valor": "300.00",
        "nroParcela": "2/3",
        "id": "20200328.00125",
        "estado": "",
        "dataPgto": ""
    }, {
        "data": "28/04/2020",
        "valor": "300.00",
        "nroParcela": "3/3",
        "id": "20200428.00125",
        "estado": "",
        "dataPgto": ""
    }]
}, {
    "dataVenda": "31/01/2020",
    "rv": "123440",
    "valorBruto": "950",
    "valorLiquido": "900",
    "taxaDesconto": "5.26%",
    "qtdeParcelas": "5",
    "bands": "HiperCard",
    "formaPgto": [{
        "data": "01/03/2020",
        "valor": "180.00",
        "nroParcela": "1/5",
        "id": "20200301.123440",
        "estado": "",
        "dataPgto": ""
    }, {
        "data": "31/03/2020",
        "valor": "180.00",
        "nroParcela": "2/5",
        "id": "20200331.123440",
        "estado": "",
        "dataPgto": ""
    }, {
        "data": "30/04/2020",
        "valor": "180.00",
        "nroParcela": "3/5",
        "id": "20200430.123440",
        "estado": "",
        "dataPgto": ""
    }, {
        "data": "30/05/2020",
        "valor": "180.00",
        "nroParcela": "4/5",
        "id": "20200530.123440",
        "estado": "",
        "dataPgto": ""
    }, {
        "data": "29/06/2020",
        "valor": "180.00",
        "nroParcela": "5/5",
        "id": "20200629.123440",
        "estado": "",
        "dataPgto": ""
    }]
}, {
    "dataVenda": "06/02/2020",
    "rv": "00001400",
    "valorBruto": "3240",
    "valorLiquido": "3000",
    "taxaDesconto": "7.41%",
    "qtdeParcelas": "7",
    "bands": "Discover",
    "formaPgto": [{
        "data": "07/03/2020",
        "valor": "428.57",
        "nroParcela": "1/7",
        "id": "20200307.00001400",
        "estado": "",
        "dataPgto": ""
    }, {
        "data": "06/04/2020",
        "valor": "428.57",
        "nroParcela": "2/7",
        "id": "20200406.00001400",
        "estado": "",
        "dataPgto": ""
    }, {
        "data": "06/05/2020",
        "valor": "428.57",
        "nroParcela": "3/7",
        "id": "20200506.00001400",
        "estado": "",
        "dataPgto": ""
    }, {
        "data": "05/06/2020",
        "valor": "428.57",
        "nroParcela": "4/7",
        "id": "20200605.00001400",
        "estado": "",
        "dataPgto": ""
    }, {
        "data": "05/07/2020",
        "valor": "428.57",
        "nroParcela": "5/7",
        "id": "20200705.00001400",
        "estado": "",
        "dataPgto": ""
    }, {
        "data": "04/08/2020",
        "valor": "428.57",
        "nroParcela": "6/7",
        "id": "20200804.00001400",
        "estado": "",
        "dataPgto": ""
    }, {
        "data": "03/09/2020",
        "valor": "428.57",
        "nroParcela": "7/7",
        "id": "20200903.00001400",
        "estado": "",
        "dataPgto": ""
    }]
}, {
    "dataVenda": "06/02/2020",
    "rv": "404041",
    "valorBruto": "456",
    "valorLiquido": "420",
    "taxaDesconto": "7.89%",
    "qtdeParcelas": "4",
    "bands": "Visa",
    "formaPgto": [{
        "data": "07/03/2020",
        "valor": "105.00",
        "nroParcela": "1/4",
        "id": "20200307.404041",
        "estado": "",
        "dataPgto": ""
    }, {
        "data": "06/04/2020",
        "valor": "105.00",
        "nroParcela": "2/4",
        "id": "20200406.404041",
        "estado": "",
        "dataPgto": ""
    }, {
        "data": "06/05/2020",
        "valor": "105.00",
        "nroParcela": "3/4",
        "id": "20200506.404041",
        "estado": "PG",
        "dataPgto": ""
    }, {
        "data": "05/06/2020",
        "valor": "105.00",
        "nroParcela": "4/4",
        "id": "20200605.404041",
        "estado": "",
        "dataPgto": ""
    }]
}]

// as variáveis abaixo virão de um POST. Aqui são apenas exemplos:
let idProcurado = '20200705.00001400'
let dataPgto = '20/02/2020'


// 1o. teste: Só mostra o registro procurado:
arq.map(a=>{
    a.formaPgto.map(x=>{
        if(x.id == idProcurado){
            console.log(x)
        }
    })
})

// linha em bco no Terminal:
console.log()

// 2o. teste: altera o registro procurado:
//  (sendo que b e y são nros de index)
arq.map((a,b)=>{
    a.formaPgto.map((x,y)=>{
        if(x.id == idProcurado){
            console.log('id:', b, '- idFormaPgto:', y)
            arq[b].formaPgto[y].estado = 'PG'
            arq[b].formaPgto[y].dataPgto = dataPgto
            console.log(x)
        }
    })
})

// para rodar este script:
// node alteraJSON.js
