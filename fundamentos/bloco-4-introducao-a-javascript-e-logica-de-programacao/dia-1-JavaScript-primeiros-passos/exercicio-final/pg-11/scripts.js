let salarioBruto = 3000;
let salarioBase;
let salarioLiquido;


if (salarioBruto<=1556.94)
{
    salarioBase = salarioBruto - salarioBruto*0.08;
}
else if(salarioBruto>=1556.95 & salarioBruto<=2594.92)
{
    salarioBase = salarioBruto - salarioBruto*0.09;
}
else if (salarioBruto>=2594.93 & salarioBruto<=5189.82)
{
    salarioBase = salarioBruto - salarioBruto*0.11;
}
else if (salarioBruto>5189.82){
    salarioBase = salarioBruto - 570.88;
}