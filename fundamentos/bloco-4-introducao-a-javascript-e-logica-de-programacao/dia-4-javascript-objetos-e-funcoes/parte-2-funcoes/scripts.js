function palindromo(string){
    let a;
    let b = string.toLowerCase()
    let c = b.split('').reverse().join('');
    if (c === b)
    {
        a = true;
    }
    else
    {
        a = false;
    }
    return a;
}
function highestCount(arrayofNumbers){
    let maiorNumero = 0;
    let x = 0;
    for(numbers in arrayofNumbers)
    {
        if(maiorNumero<arrayofNumbers[numbers])
        {
            maiorNumero = arrayofNumbers[numbers];
            x = numbers;
        }
       
    }
    return x
}
function lowestCount(arrayofNumbers){
    let maiorNumero = 0;
    let x = 0;
    for(numbers in arrayofNumbers)
    {
        if(maiorNumero>arrayofNumbers[numbers])
        {
            maiorNumero = arrayofNumbers[numbers];
            x = numbers;
        }
       
    }
    return x
}
function highestWord(array) {
    let a = []
    let b = []
    
    for(let i = 0; i<array.length; i++)
    {
        a = array[i].split("");
        b.push(a.length) 
    }
    let maiorNumero = b.length
    
    let xz = [];
    for(let i = 0; i<b.length; i++)
    {
        if(maiorNumero<b[i])
        {
            xz.push(array[i])
        }
    }
    
    return xz;
}



