"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const getSum = (a, b) => a + b;
const getDif = (a, b) => {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
};
const getDev = (a, b) => a / b;
const getMulti = (a, b) => a * b;

const first = Math.trunc(Math.random() * 100);
const second = Math.trunc(Math.random() * 100);
console.log(
  `Первое число ${first}, второе число ${second}, результат ${getSum(
    first,
    second
  )}`
);
console.log(
  `Первое число ${first}, второе число ${second}, результат ${getDif(
    first,
    second
  )}`
);
console.log(
  `Первое число ${first}, второе число ${second}, результат ${getDev(
    first,
    second
  )}`
);
console.log(
  `Первое число ${first}, второе число ${second}, результат ${getMulti(
    first,
    second
  )}`
);