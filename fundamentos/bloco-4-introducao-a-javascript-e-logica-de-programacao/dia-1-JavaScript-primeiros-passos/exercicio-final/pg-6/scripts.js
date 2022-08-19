//para que esse codigo corra de maneira correta voce deve executar no terminal dentro da pagina node scripts.js, pois no output do vscode n permite entrada.
const readline = require('readline');
let peca = ''
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual a sua peca? ', (peca) => {
  console.log(`sua peça é o ${peca}!`);
  peca = (peca .toLocaleLowerCase())
  switch(peca){
    case 'peão':
        console.log('uma casa para frente')
        break
    case 'cavalo':
        console.log('Movimento em formato de L')
        break
    case 'bispo':
        console.log('Diagonais')
        break
    case 'torre':
        console.log('todas Para frente, trás e para os lados')
        break
    case 'rei':
        console.log('uma casa para todos os lados')
        break
     case 'rainha':
        console.log('Todas as casas para todos os lados')
        break   
    default:
        console.log('peça incorreta')    

}
});




    
