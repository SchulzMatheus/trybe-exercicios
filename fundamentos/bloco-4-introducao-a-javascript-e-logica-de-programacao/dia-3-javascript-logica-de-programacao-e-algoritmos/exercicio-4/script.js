

let n = 50;

 let np = [];

 for (let i = 2; i < n; i++){   
    let qtd = 0; 

    for(let i2 = 2; i2 < i; i2++) { 
       if (i % i2 == 0) {
          qtd ++;
       }
    }
    console.log(qtd)
    if (qtd % i == 0) {
       np.push(i);
    }

 }
console.log(np)

