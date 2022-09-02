//ta muito errado, vou atualizar em breve

function somatorio(arrayofNumbers) {
    let soma = 0;
    for (i in arrayofNumbers){
        soma += arrayofNumbers[i];
        }
    return soma;
}

let string = 'MCDXLIVI'
let controller;
let soma;
let x = []
let y;
let z = []
let robjeto = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    

}
for(let i = 0; i<string.length; i++){
controller = string[i]
x.push(robjeto[controller])

}
for(let i = 0; i<x.length; i++)
{
    y = parseInt(x[i])
    z.push(y);
}
console.log(somatorio(z))

