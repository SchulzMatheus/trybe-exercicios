let estado = 'reprovada'

switch(estado){
    case 'aprovada':
        console.log('Parabens voce foi aprovada')
        break;
    case 'lista':
        console.log('Você está na lista de espera')
        break;
    case 'reprovada':
        console.log('Você está reprovada')
        break;
    default:
        console.log('Não se aplica');
}