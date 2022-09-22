// const sayHello = () => {
//     return ('hello trybers');
//   }
  
//   const printGreeting = (callback) => {
//       console.log(callback());
//   }
  
//   printGreeting(sayHello);

//   const sumFixAmount = (amount) => {
//     return (number) => amount + number;
//   }
  
//   const initialSum = sumFixAmount(15)
//   console.log(initialSum(5));
//  const repeat = (number, action) => {
//      for (let count = 0; count <= number; count += 1) {
//        action(count);
//      }
//    };
  
//    //repeat(5, console.log);

//    repeat(4, (number) => {
//      if (number % 2 === 0) {
//        console.log(number, 'is even');
//      } else console.log(number, 'is odd');
//    });
// const repeat = (x, action) => {
//     for (let count = 0; count <= x; count += 1) {
//       action(count);
//     }
//   };
  
//   const isEven = (x) => {
//     if (x % 2 === 0) {
//       console.log(x, 'is even');
//     }
//   };
  
//   const isOdd = (x) => {
//     if ((x % 2) > 0) {
//       console.log(x, 'is odd');
//     }
//   };
  
//   repeat(3, isEven); // Testa quais números serão pares;
//   repeat(3, isOdd); // Testa quais números serão ímpares;

// const sum = (num1, num2) => num1 + num2;
// const div = (num1, num2) => num1 / num2;
// const sub = (num1, num2) => num1 - num2;
// const mult = (num1, num2) => num1 * num2;

// const calculator = (func) => func(3, 4);

// console.log(calculator(sum))

const wakeUp = (string) => string = 'Acordando!!';
const breakfast = (string) => string = 'Bora tomar café!!';
const sleep = (string) => string = 'partiu dormir!!';

const doingThings = (func) => func();
console.log(doingThings(wakeUp))
console.log(doingThings(sleep))
console.log(doingThings(breakfast))