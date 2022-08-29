let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0]
for(let i = 0; i < numbers.length; i++)
{
    if(menorNumero>numbers[i])
    {
        menorNumero = numbers[i]
    }

}
console.log(menorNumero)
