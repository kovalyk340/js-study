/*1. Задача Пользователь вводит склавиатуры 2 числа. Выполнить деление первого на второе и записать в подробном виде:10 : 5 = 2*/

// let firstNumOfUser = prompt("Введите любое число:");
// let secondNumOfUser = prompt("Введите любое число:");

// let result = firstNumOfUser / secondNumOfUser;
// console.log(firstNumOfUser + " : " + secondNumOfUser + " = " + result);


// 2. Задача Запросить у пользователя 1 число. Прибавить к нему 10, записать в подробном виде:
// 25 + 10 = 35

// Костыль патау
// let numberUser = prompt("Введите любое число:");
// let num2 = 10;
// let result = (numberUser - num2) + num2 + num2;
// console.log(numberUser + " + " + num2 + " = " + result);

// let numberUser = Number(prompt("Введите любое число:"));
// let result = numberUser + 10;
// console.log(numberUser + " + 10 = " + (numberUser + 10));



// 3. Задача Запросить у пользователя 1 число. Из 100 вычитаем запрошенное число, записать в подробном виде:

// let numberUser = prompt("Введите любое число(<100):");
// console.log("100 - " + numberUser + " = " + (100 - numberUser));


// '100 - 33 = 100' - 33 -> NaN - 33 -> NaN
// NaN
// + (строковый) - если есть хоть одна строка, то всё преобразуется к строке
// 5 + '4' -> '5' + '4' = '54'
// 5 - '4' -> 5 - 4 = 1

// 4. Задача Запросить 2 числа, выполнить умножение в подробном виде:5 × 7 = 35


// let firstNumOfUser = prompt("Введите любое число:");
// let secondNumOfUser = prompt("Введите любое число:");
// console.log(firstNumOfUser + " x " + secondNumOfUser + " = " + firstNumOfUser * secondNumOfUser);





// 5. Задача Запросить 2 числа, выполнить вычитание в подробном виде:
// 10 - 13 = -3


// let firstNumOfUser = Number(prompt("Введите любое число:")); // 2
// let secondNumOfUser = Number(prompt("Введите любое число:")); // 1
// console.log(firstNumOfUser + " - " + secondNumOfUser + " = " + (firstNumOfUser - secondNumOfUser));
// 2 + " - " +  1 + " = " + " 2 " - 1
// "2 - 1 = 2" - 1




// 6. Задача Запросить два числа, выполнить сначала умножение с этими числами, затем результат разделить на 2. Записать в подробном виде:
// 10 × 50 : 2 = 250


// 1. ()
// 2. ^
// 3. * /
// 4. + -

// let firstNumOfUser = prompt("Введите любое число:");
// let secondNumOfUser = prompt("Введите любое число:");
// console.log(firstNumOfUser + " x " + secondNumOfUser + " : 2 = " + firstNumOfUser * secondNumOfUser / 2);


// 7. Задача Запросить у пользователя число. Вывести в консоль удвоенное число. Операцию записать в подробном виде:17 × 2 = 34
/*

let numOfUser = prompt("Введите любое число:")
let num2 = 2;
let result = numOfUser * num2;
console.log(numOfUser + " x " + num2 + " = " + result);
*/

// 8. Задача Запросить у пользователя имя.Запросить у пользователя его возраст.Вывести в консоль: Тебя зовут < имя >, после дня рождения тебе будет < возраст > лет!


// let nameOfUser = prompt("Введите ваше имя:")
// let ageOfUser = Number(prompt("Введите ваш возраст:"))

// console.log("Тебя зовут " + nameOfUser + ", после дня рождения тебе будет " + (ageOfUser + 1) + " лет!");
// "Тебя зовут Саша, после дня рождения тебе будет 101 лет!"


// 9. Задача Измени значение в переменной seven, чтобы в консоль вывелась цифра 10. Используя только оператор инкремента.


// let seven = 7;
// console.log(++seven);
// console.log(seven++);
// console.log(++seven);

// 10. Задача Не выполняя код, дать ответ, что выведется в консоль: Результат записать в комментарий.

// let tetraVar = 4;
// console.log(7 + tetraVar++ - 3 * --tetraVar); // 1 шаг num++(4+1) 2 шаг --num(5-1) шаг 3 3*4 шаг 4 7+4 шаг 5 11-12=-1 

// 11.Задача Не выполняя код, дать ответ, что выведется в консоль: Результат записать в комментарий.

// let tetraVar = 0;
// console.log(1 + ++tetraVar - 3 * --tetraVar + 2 * (++tetraVar + ++tetraVar));
// 8

// 12. Задача
// Не выполняя код, дать ответ, что выведется в консоль: Результат записать в комментарий.

// let tetraVar = 4;
// console.log(3 - ++tetraVar - 3 + ++1 * 2 * (++tetraVar + --tetraVar));
// выведется ошибка т.к инкремент нельзя применять к числам

// 13. Задача
// Считай с клавиатуры три целых числа. Выведи на экран их среднее арифметическое в подробнов виде.
// Среднее арифметическое - это число, равное сумме всех чисел, деленной на их количество.
// let numberUser = Number(prompt("Введите первое число:"));
// let num2 = Number(prompt("Введите второе число:"));
// let num3 = Number(prompt("Введите третье число:"));
// let result = numberUser + num2 + num3
// console.log(`${numberUser} + ${num2} + ${num3} = ${result} \nСреднее арифметическое: ${result} / 3 = ${result / 3}`);
// 14. Задача
// Что выведется в консоль?

// console.log("6" + 10); 610
// console.log(20 + "5"); 205
// console.log("10" + "10");1010

// console.log("6" - 10); -4
// console.log(20 / "5"); 4
// console.log("10" * "10"); 100

// console.log("10" + 7 + 5 + "3"); 10753
// console.log("10" - 7 + 5 + "3"); 83
// console.log("10" + (7 + 5) + "3");10123

// console.log(7 + 5 + String("5") + "3"); 1253
// console.log(Number("10") + 7 + 5 + "3"); 223
// console.log(Number("10") + Number(String(7)) + String(5) + 3);1753

// console.log(Number("")); 0
// console.log(Number('0')); 0
// console.log(Number(' ')); 0

// console.log(Number('   '));0
// console.log(Number('2'));2
// console.log(Number('2px')); NaN

// 15. Задача
// Укажите все значения NaN:

// console.log("2px" - 2); // Nan
// console.log(0 + 3);
// console.log("10" + 10);
// console.log("3" - 4);
// console.log("4px" * 2); // Nan
// console.log(10 - "7");
// console.log(7 - "2px");// Nan
// console.log("4px" + 2);
// console.log("8px" / 2); //Nan


// 16. Задача
// Сделать рефакторинг кода:

// let index = 0;
// index = index + 1;

// let anotherNum = 10;
// anotherNum = anotherNum / 5;

// let indexTest = 5;
// index = index - 1;


// let index = 0;
// index++;

// let anotherNum = 10;
// anotherNum /=  5;

// let indexTest = 5;
// index--;






// 17. Задача Программист написал код, который выводит в консоль значение индекса, увеличенное на 1. Но в консоль выводится не то, что он хочет.Исправьте код.
// let index = 100;
// console.log(index++);


// let index = 100;
// console.log(++index);

// Или
// let index = 100;
// index++;
// console.log(index);




// 18. Задача Не выполняя код, дать ответ, что выведется в консоль: Результат записать в комментарий.

// console.log(Number(11)); 11
// console.log(Number('11')); 11
// console.log(Number('  11  ')); 11
// console.log(Number(''));0
// console.log(Number(' ')); 0

// console.log(Number('    '));0
// console.log(Number('0')); 0
// console.log(Number('   0  ')); 0
// console.log(Number('11px')); Nan
// console.log(Number('-11')); -11

// 19. Задача
// Не выполняя код, дать ответ, что выведется в консоль: Результат записать в комментарий.

// console.log(Number('+11')); 11
// console.log(Number('/11')); NaN
// console.log(Number('*11')); NaN
// console.log(Number('%11'));NaN
// console.log(Number('11_')); NaN

// console.log(Number(null)); 0
// console.log(Number(undefined)); NaN
// console.log(Number(true));1
// console.log(Number(false));0
// console.log(Number(Boolean(null))); 0

// 20. ★ Задача ★
// Легенда: Вы заходите в магазин и видите огромную очередь, вам нужно рассчитать время ожидания в очереди.
// Пользователь вводит кол-во людей в очереди. Фиксированное время приема одного покупателя всегда равна 5 минутам.

// Пример ввода:
// Введите кол-во людей: 40

// Пример вывода:
// Вы должны отстоять в очереди 3 часа и 20 минут.

// let countPeople = Number(prompt("Введите количество людей в очереди: "))
// let hours = parseInt(countPeople * 5 / 60);
// let minuets = countPeople * 5 % 60;

// console.log(hours);
// console.log(minuets);




// 21. ★ Задача ★
// В переменной number записано целое число. В переменную lastDigit нужно записать последнюю цифру этого числа. Для вычисления используй переменную number и оператор «остаток от деления».

// let number = 546;
// lastDigit = number % 10;
// console.log(lastDigit);

// 18 & 19 - простые


// 20, 21
// parseInt(3.647645756) // 3


// ** 22 - написать программу
// 3 / 2 = 1.5