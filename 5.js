// Реализовать функцию round5, которой передается целое число, функция должна
// возвращать ближайшее целое число к тому что было передано, без остатка делящееся
// на 5.

// ```js
// function round5(val) {

// }

// console.log(round5(0)); // 0
// console.log(round5(2)); // 0
// console.log(round5(3)); // 5
// console.log(round5(11)); // 10
// console.log(round5(14)); // 15
// console.log(round5(50)); // 50
// console.log(round5(-2)); // 0
// console.log(round5(-3)); // -5

function round5(val) {
  let reserve = val;
  if (val % 5 === 0) {
    return val;
  } else {
    while (val % 5 != 0 && reserve % 5 != 0) {
      val = val + 1;
      reserve = reserve - 1;
    }
    if (reserve % 5 === 0) {
      return reserve;
    } else {
      return val;
    }
  }
}
const numb = Math.trunc(Math.random() * 100);
console.log(`Задано ${numb} результат ${round5(numb)}`);
