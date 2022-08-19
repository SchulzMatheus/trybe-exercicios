const nota = 101;
if(nota>=80)
{
    console.log("Parabéns, você foi aprovado(a)!");
}
else if(nota<80 && nota>=60){

    console.log ("voce está na lista de espera");
}
else if(nota<60){
    console.log("voce foi reprovado!");
}
else {
    console.log("Dados invalidos!!");
}