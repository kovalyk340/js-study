/*1. Задача Создать 3 перемнных, все разного типа данных. Вывести в консоль в одну строчку через пробел.*/
// let userName = 'Artem';
// let isUserAdmin = true;
// let userCoins = 40;
// console.log(userName + " " + isUserAdmin + " " + userCoins);


// 2. Задача Создать переменную, которая хранит имя. Вывести в консоль приветствие: Привет, <имя из переменной>!
// let userName = "Artem";
// console.log("Привет, " + userName + "!");


// 3.
// Объяви переменные intValue, numericValue, size, number с типом number. Присвой им любые разные значения. Вывести в консоль переменные через пробел, в обратном порядке их создания.
// let intValue = 40;
// let numericValue = 60;
// let size = 80;
// let number = 100;
// console.log(number + " " + size + " " + numericValue + " " + intValue)


// 4. Задача Создать 3 перемнных, все разного типа данных. Вывести их тип в консоль.
// let userName = 'Artem';
// let isUserAdmin = true;
// let userCoins = 40;
// console.log(typeof userName);
// console.log(typeof isUserAdmin);
// console.log(typeof userCoins);


// 5. Задача. Сделать рефакторинг кода:
/*До*/
// vozrastPolzovatela = 10
// boolian = false;
// user__text = 'Какой-то текст";
// console.log(chiclo boolian user__text)

/*После*/
// let userAge = 10;
// let isBoolean = false;
// let userText = "Какой-то текст";
// console.log(usersAge + " " + isBoolean + " " + userText);

// 6. Задача Сделать рефакторинг кода:
/*До*/
// uzerName = Валентин;
// user - money = 2000; /* Это монеты */
// areAccess = "true";

// console.log("У" + uzerName + "а" + " есть " + "user-money" + "монет")
// console.log(uzerName + "имеет" + "доступ:" + "true")

/*После*/
// let userName = "Валентин";
// let userCoin = 2000;
// let isUserAccess = true;
// console.log("У " + userName + "а есть " + userCoin + " монет")
// console.log(userName + " имеет доступ:" + isUserAccess)

// 7. Задача Убери комментарии с части кода, чтобы в консоль вывелась фраза: Happy New Year

// let text = '';
// // text = text + "Merry";
// // text = text + "Christmas\n";
// // text = text + "Merry New\n";
// // text = text + "New";
// // text = text + "weekend\n";
// text = text + "Happy New"; // +
// // text = text + "Merry New!";
// text = text + " "; // +
// text = text + "Year"; // +
// console.log(text); // +

// 8. Задача Раскомментируй одну строчку, чтобы программа вывела в консоль числа 12 и 2 (сначала 12, а затем 2).

// Нельзя изменять строки с объявлением переменных.
// Нельзя изменять строки отвечающие за вывод в консоль.
// Нужно раскомментировать одну строку и не менять остальные.
// let x = 2;
// let y = 12;
// // y = x * y;
// y = x + y;
// x = y - x;
// y = y - x;
// console.log(x);
// console.log(y);

// 9. Задача Закомментируй ненужные строки кода, чтобы в консоль вывелась надпись: 2 плюс 3 равно 5 Примечание: комментировать строки с объявлением переменных let a и let b нельзя.

// let a = 3;
// let b = 2;

// console.log(b); // +
// console.log(" плюс ");
// console.log(a);
// console.log(" равно ");
// console.log(a + b);

// 10. Задача
// Пользователь вводит с клавиатуры сначала любое число, а затем текст. Вывести в консоль в следующем виде:
// Вы ввели текст: <текст пользователя>, вы ввели число: <число пользователя></число>

// let textUser = prompt('Введите любой текст:');
// let numberUser = Number(prompt('Введите любое число:'));
// console.log("Вы ввели текст: " + textUser + ", вы ввели число: " + numberUser);

// 11. Задача Не выполняя код, дать ответ, что выведется в консоль: Результат записать в комментарий.

// console.log(typeof "text"); // 'string'
// console.log(typeof "1010");/* (string)*/
// console.log(typeof false); /*(boolean)*/
// console.log(typeof "Pavel"); /*(string)*/
// console.log(typeof "undefined"); /*(string)*/

// console.log(typeof -106.432); /*number*/
// console.log(typeof "null"); /*string*/
// console.log(typeof 111); /*number*/
// console.log(typeof true); /*boolean*/
// console.log(typeof " "); /*string*/

// 12. Задача Не выполняя код, дать ответ, что выведется в консоль: Результат записать в комментарий.

// console.log(typeof Infinity);/*number*/
// console.log(typeof 200);/*number*/
// console.log(typeof "");/*string*/
// console.log(typeof "true");/*string*/
// console.log(typeof null);/*object*/

// console.log(typeof "tester");/*string*/
// console.log(typeof NaN);/*number*/
// console.log(typeof false);/*boolean*/
// console.log(typeof -Infinity);/*number*/
// console.log(typeof undefined);// 'undefined'

// null, undefined, number, string, boolean
// object
// bigint, symbol


// 13. ★ Задача ★ Что выведется в консоли и почему:

// console.log(numTest); // undefined, потому что значение ещё не присвоено
// var numTest = 7;
// console.log(numTest); // ?(выведется 7)

// console.log(numberTest); // ReferenceError - обращаемся к переменной, которая ещё не создана
// let numberTest = 12;
// console.log(numberTest); // Из-за ошибки код ниже не выполняется

// console.log(PI); // ReferenceError - обращаемся к переменной, которая ещё не создана
// const PI = 3.1415;
// console.log(PI); // console.log(numberTest); // Из-за ошибки код ниже не выполняется

// 14. ★ Задача ★ Не выполняя код, дать ответ, что выведется в консоль: Результат записать в комментарий.

// console.log(typeof (typeof 10));
// console.log(typeof (typeof 'text'));
// console.log(typeof (typeof NaN));
// console.log(typeof (typeof Infinity));
// console.log(typeof (typeof null));
// console.log(typeof (typeof undefined));
// во всех случаях выведется string

