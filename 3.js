"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/
function getMax(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

const first = Number(prompt("Введите первое число"));
const second = Number(prompt("Введите второе число"));
const third = Number(prompt("Введите третье число"));
console.log(getMax(first, second, third));