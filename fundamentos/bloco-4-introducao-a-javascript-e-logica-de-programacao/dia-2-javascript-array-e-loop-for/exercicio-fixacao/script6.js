let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;
let x = 0;
for(let i = 0; i < numbers.length; i++)
{
    if(numbers[i]%2!=0)
    {
        x = x+1
    }

}
if (x!=0)
{
    console.log(x)
}
if(x===0){
    console.log('nenhum valor impar encontrado')
}