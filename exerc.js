const faturamentoPorEstado = [
    {
        "estado": "sp",
        "valor": 67836.43
    },
    {
        "estado": "rj",
        "valor": 36678.66
    },
    {
        "estado": "mg",
        "valor": 29229.88
    },
    {
        "estado":"es",
        "valor":27165.48
    },
    {
        "estado":"outros",
        "valor":19849.53
    }
];

const valorTotal = faturamentoPorEstado.reduce((total,item) => total + item.valor,0)
console.log("O valor total é: " , valorTotal);

const percentualEstado = faturamentoPorEstado.map(item =>{
    return{
        estado: item.estado,
        valor:item.valor,
        percentual:((item.valor/valorTotal )*100).toFixed(2) + "%"
    };
})
console.log(percentualEstado)