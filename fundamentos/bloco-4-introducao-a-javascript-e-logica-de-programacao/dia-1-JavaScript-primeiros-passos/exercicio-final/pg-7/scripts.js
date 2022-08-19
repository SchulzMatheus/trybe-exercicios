const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Qual a sua nota? ', (nota) => {
    console.log(`sua nota em porcentagem é ${nota}!`);

    if(nota>=90 && nota <=100)
    {
        console.log ('parabéns você tirou A')
    }
    else if (nota >=80)
    {
        console.log ('Sua nota foi B')
    }
    else if (nota >= 70){
        console.log ('Sua nota foi C')
    }
    else if (nota>=50){
        console.log('Sua nota foi D')
    }
    else if (nota<50 && nota>=0){
        console.log('Sua nota foi F')
    }
    else {
        console.log('Dados errados')
    }
    
  });
