let array = ['java', 'javascript', 'python', 'html', 'csss'];
let a = []
let b = []

for(let i = 0; i<array.length; i++)
{
    a = array[i].split("");
    b.push(a.length) 
}
let maiorNumero = b.length
let xz = []
for(let i = 0; i < b.length; i++)
{
    if(maiorNumero >= b[i])
    {
        xz.push(array[i])
    }
}

console.log(xz)