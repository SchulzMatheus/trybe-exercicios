let array = ['java', 'javascript', 'python', 'html', 'csss'];
let a = []
let b = []

for(let i = 0; i<array.length; i++)
{
    a = array[i].split("");
    b.push(a.length) 
}
let maiorNumero = b.length
let c
let xz = []
for(let i = 0; i < b.length; i++)
{
    if(maiorNumero >= b[i])
    {
        maiorNumero=b[i]
        c = i;
        xz.push(array[c])
    }
}

console.log(xz)