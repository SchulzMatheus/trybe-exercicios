let peca = ('CAVALO'.toLowerCase())


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


    
