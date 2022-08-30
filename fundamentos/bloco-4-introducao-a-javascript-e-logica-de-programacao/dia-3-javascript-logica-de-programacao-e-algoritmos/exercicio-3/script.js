let array = ['java', 'javascript', 'python', 'html', 'css'];
let a = []
let b = []

for(let i = 0; i<array.length; i++)
{
    a = array[i].split("");
    b.push(a.length) 
}
let maiorNumero = 0;
let c = 0;
for(let i = 0; i<b.length; i++)
{
    if(maiorNumero>b[i])
    {
        maiorNumero=b[i]
        c = i;
    }
}

console.log(array[c])