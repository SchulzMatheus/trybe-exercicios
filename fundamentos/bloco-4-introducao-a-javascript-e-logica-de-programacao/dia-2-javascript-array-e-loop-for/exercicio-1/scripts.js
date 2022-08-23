/*let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let index = 0; index<names.length; index++)
{
    console.log(names[index]);
}


/*let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index<groceryList.length; index++){
    console.log(groceryList[index])
}


function dice () { 
    return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
let a = 0
while (d1 === d2) {
    d2 = dice();
    a++
    console.log(a)
}*/
let fat = 0;
let x = fat;
let start = fat - 1
for(let index = start; index>1; index--)
{
    x = x*index;
    console.log(x)
}
console.log(x);

/*let a = 10;
function tir(fatorial)
{          
    var r = fat;
    var primeiroMultipicador = fatorial - 1;
    for (var i = primeiroMultipicador; i > 1; i--) {
        r *= i;
    }
     
    return r;
}
console.log(tir(a))*/

