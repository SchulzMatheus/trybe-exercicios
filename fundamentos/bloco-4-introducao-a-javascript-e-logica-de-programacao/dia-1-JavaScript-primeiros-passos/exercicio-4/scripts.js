const currentHour = 6;
let message = '';

if (currentHour>=22){
    message = 'Não deveríamos comer nada, é hora de dormir';
    console.log(message);
}
else if(currentHour>=18 && currentHour<22){
    message = 'Rango da noite, vamos jantar :D'
}