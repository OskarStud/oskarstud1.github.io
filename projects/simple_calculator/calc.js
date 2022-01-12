'use strict';

const num1 = +prompt ('Введите первое число');
const operand = prompt ('Введите следующую операцию + - * /');
const num2 = +prompt ('Введите второе число');

if (isNaN(num1) || isNaN(num2)) {
    alert('Некорректный ввод чисел');
}
    else if (!num1 && num1 !==0) {
        alert('Первое число не указано');
    }
        else if (!num2 && num2 !==0) {
            alert('Второе число не указано')
        }
            else {
                switch (operand) {
                    case '': alert('Не введен знак'); break;
                    case '+': alert("Результат сложения: " + (num1 + num2)); break;
                    case '-': alert('Результат вычитания: ' + (num1 - num2)); break;
                    case '*': alert('Результат умножения: ' + (num1 * num2)); break;
                    case '/': alert('Результат деления: ' + (num1 / num2));
                    default: alert('Программа не поддерживает такую операцию')
                }


    }
