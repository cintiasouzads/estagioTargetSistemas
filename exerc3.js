let valorDiario = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]



const diasComFaturamento = valorDiario.filter(item => item.valor > 0) 
console.log(diasComFaturamento)

const menorValor = diasComFaturamento.reduce((menor, elementoAtual) => {
    return menor.valor < elementoAtual.valor ? menor : elementoAtual;
});
 console.log("O menor valor é de:" , menorValor.valor)

const maiorValor = diasComFaturamento.reduce((maior, elementoAtual) => {
    return maior.valor > elementoAtual.valor ? maior : elementoAtual
},0)
console.log("O maior valor é de:" , maiorValor.valor)




let soma = 0;
for(let i = 0; i < valorDiario.length; i++){
    soma += valorDiario[i].valor;
}
console.log("A soma é de:" + parseInt(soma));

const media = soma / valorDiario.length
console.log("A média é de: ", parseInt(media))

let diasAcimadaMedia = 0;
for(let i = 0; i < diasComFaturamento.length; i++){
    if(diasComFaturamento[i].valor > media){
        diasAcimadaMedia++
    }
}
console.log("Os dias acima da média são:" + diasAcimadaMedia)