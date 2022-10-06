// linhaDeProducao.js

const TWO_SECONDS = 2000;

// setTimeout(() => {
//   console.log('Comprar parafusos'); // Comprar parafusos
//   console.log('Adicionar ao estoque'); // Adicionar ao estoque
// }, TWO_SECONDS);

// console.log('1 - Receber roda'); // 1 - Receber roda
// console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
// console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// Saída:
// 1 - Receber roda
// 2 - Encaixar parafusos
// 3 - Fixar roda no carro
// Comprar parafusos
// Adicionar ao estoque

// pushNumberAsync.js

// pushNumberAsync.js
// const pushNumber = (list, number) => list.push(number);

// const numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers);
// pushNumberAsync.js

// const pushNumber = (list, number) => list.push(number);

// const numbers = [];

// const THREE_SECONDS = 3000;

// setTimeout(() => pushNumber(numbers, 1), THREE_SECONDS);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);
// console.log(numbers);

// Saída:
// [2, 3]
// Saída:
// [ 1, 2, 3 ]
// Saída:
// [ 1, 2, 3 ]
// pushNumberAsync.js

// const pushNumber = (list, number) => list.push(number);

// const numbers = [];

// const THREE_SECONDS = 3000;

// setTimeout(() => pushNumber(numbers, 1), THREE_SECONDS);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// setTimeout(() => console.log(numbers), THREE_SECONDS);

// Saída:
// [ 2, 3, 1 ]

// despesas.js

// despesas.js

// Declaramos nossa variável de despesas
const minhasDespesas = [
    {
      academia: 99,
    },
    {
      ifood: 200,
    },
    {
      celular: 60,
    },
    {
      internet: 100,
    },
  ];
  
  // Declaramos nossa renda
  const minhaRenda = 1000;
  
  const despesaMensal = (renda, despesas, callback) => {
    // Definimos que a despesa total é igual ao valor retornado pela função callback (que é o parâmetro da nossa função)
    // que vai receber nosso parâmetro/variável "despesas"
    const despesaTotal = callback(despesas);
  
    // Definimos nosso saldo final, que é nossa renda - nossa despesa total
    const saldoFinal = renda - despesaTotal;
  
    console.log(`Balanço do mês:
      Recebido: R$${renda},00
      Gasto: R$${despesaTotal},00
      Saldo: R$${saldoFinal},00 `);
  };
  
  // Definimos nossa função que será passada como parâmetro
  // essa função recebe o parâmetro despesas a partir da função principal despesaMensal
  const somaDespesas = (despesas) => {
    // Separamos cada item do nosso array de despesas
    // e fazemos um reduce para somar os valores
    const custoItem = despesas.map((item) => Object.values(item));
    const despesaTotal = custoItem.reduce((acc, curr) => {
      const soma = acc + curr[0];
      // acc é a sigla para accumulator (acumulador)
      // curr é a sigla para current_value (valor atual)
      return soma;
    }, 0);
    return despesaTotal;
  };
  
  // Executamos a função principal com as variáveis renda, despesas
  // e a nossa função somaDespesas
  // callback = somaDespesas
  despesaMensal(minhaRenda, minhasDespesas, somaDespesas);
  
  // Saída:
  //  Balanço do mês:
  //  Recebido: R$1000,00
  //  Gasto:    R$459,00
  //  Saldo:    R$541,00