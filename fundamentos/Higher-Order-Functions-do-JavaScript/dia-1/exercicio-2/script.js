const generateRandomNumber = (func) => {
    const number = Math.floor(Math.random() * 5)+1;
    console.log(`Numero sorteado: ${number}!!!`)
    console.log(`Sua aposta: ${func}`);
    if(number === func) return console.log('you win');
    else return console.log('you lose');
}

const betNumber = (x) => {
    return x;
}


generateRandomNumber(betNumber(4));
