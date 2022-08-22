const custo = 1500
const valor = 3500
let imposto = valor*0.2
let custoTotal = custo + imposto;
let lucro = valor-custoTotal

if(valor<0 || custo<0)
{
    console.log('Dados invalidos!')
}
else {
    let venda = lucro*1000
    console.log('O lucro na venda de 1000 produtos será de: 0', venda, 'R$')
}