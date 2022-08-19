 
    let a = 3
    let b = 4
    let c = 5
    
    if(a < b){
        if(a < c)
            menor = a;
        else
            menor = c;
    }
    else{
        if(b < c)
            menor = b;
        else
            menor = c;
    }

    if(a > b){
        if(a > c)
            maior = a;
        else
            maior = c;
    }
    else{
        if(b > c)
            maior = b;
        else
            maior = c;
    }
    console.log(menor, "e", maior)


