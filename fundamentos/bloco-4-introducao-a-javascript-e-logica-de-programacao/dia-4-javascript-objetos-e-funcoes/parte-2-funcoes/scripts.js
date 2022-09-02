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
function longestWord(array) {
    let longestWord = array[0]
    for(let i = 0; i< array.length; i++)
        {
            if (array[i].length > longestWord.length)
            longestWord = array[i]
        }
    return longestWord
}

   function count (arrayofNumbers){
    let qtd = {}; // objeto pra armazenar o numero e sua quantidade
    let mrn = 0;
    let rc = 0;
    for (let i of arrayofNumbers) {
        qtd[i] = (qtd[i] || 0) + 1;    //deve se atribuir a qtd[i] o valor atual (ou 0 caso seja a primeira ocorrencia) + 1 também poderia ser escrito da seguinte forma:
/*    if (!qtd[i])
            {
            qtd[i] = 1;
            } 
            else {
            qtd[i] += 1;
            } 
*/   
    }
      for (key in qtd)
        {
            if(qtd[key] > rc)
            mrn = key     
            rc = qtd[key]
        }

    return mrn;    
    }
   
      
      
   
  

 
