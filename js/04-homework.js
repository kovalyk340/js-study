// 1. Задача Вывести в консоль с учётом переноса строки:
// Это строка ? "Да!"
// console.log("Это строка?\n\"Да!\"");

// 2. Задача
// Вывести в консоль:
// Петр сказал: "Иван учит английский язык".
// console.log("Петр сказал: \"Иван учит английский язык\".");
// 3. Задача
// Воспользуйтесь как можно меньшим количеством конкатенаций:

// let name = "Peter";
// let rareCoins = 3;
// console.log("У" + " " + name + " " + "имеет" + " " + rareCoins + "шт." + " " + "редких монет" + "!");

// console.log("У " + name + " имеет " + rareCoins + "шт. редких монет!");

// let name = "Peter";
// let rareCoins = 3;
// console.log(`У ${name} имеет ${rareCoins}шт. редких монет!`);

// 4. Задача
// Пользуясь шаблонными литералами, сделать рефакторинг кода 3 задачи.
// let name = "Peter";
// let rareCoins = 3;
// console.log(`У ${name} имеет ${rareCoins}шт. редких монет!`);

// 5. Задача
// Вывести в консоль:
// Я - строка с "двойными кавычками" внутри "двойных кавычек".
// console.log(`Я - строка с "двойными кавычками" внутри "двойных кавычек".`);
// console.log('Я - строка с "двойными кавычками" внутри "двойных кавычек".');

// 6. Задача
// Вывести в консоль с учётом переноса строки:

// "FirstLine"
//     \SecondLine/
// 'ThirdLine'
// console.log("\"FirstLine\"\n\t\\SecondLine/\n'ThirdLine'");

// 7. Задача
// Исправьте код двумя способами, чтобы он работал:

// экранирование;
// одинарные кавычки;
// const myStr = "<a href="http://www.example.com" target="_blank">Link</a>";
// const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
// console.log(myStr);


// FIXME: 8. Задача
// Пользуясь переменными выполнить склеивание:
// My name is Pavel. I have 1000000 dollars

// let name = 'Pavel';
// let money = 1000000;

// let name = 'Pavel';
// let money = 1000000;
// console.log(`My name is ${name}. I have ${money} dollars`);

// 9. Задача
// Получить из строки числовой тип данных. Вывести результат в консоль.

// let numberStr = '200';

// let numberStr = Number('200');

// console.log(numberStr);
// console.log(typeof (numberStr));

// 10. Задача
// Пользуясь приведением типов выполнить сложение двух чисел.

// let number = 21;
// let numberic = '22';

// let number = 21;
// let numberic = '22';

// console.log(`${number + Number(numberic)}`);


// FIXME: 11. Задача
// Пользуясь приведением типов выполнить сложение двух чисел.
// Не изменяя значений переменных number, numberic

// let number = '200';
// let numberic = '22';

// let number = '200';
// let numberic = '22';
// console.log(`${Number(number) + Number(numberic)}`);



// 12. Задача
// Вывести в консоль количество символов в строке strText;

// let strText = "Hello world!";

// let strText = "Hello world!";
// console.log(strText.length);



// 13. Задача
// В переменную tagline нужно записать строку "JustDoIt". Используй s1, s2, s3 и конкатенацию строк.

// Не изменяй значения переменных s1, s2, s3;
// Для инициализации переменной tagline используй s1, s2, s3 и конкатенацию строк;
// Программа должна выводить в консоль значение переменной tagline;
// let s1 = "Do";
// let s2 = "It";
// let s3 = "Just";
// let tagline = s3 + s1 + s2;
// console.log(tagline);


// 14. Задача
// Выполнить задачу 13 с использованием шаблонных литералов.

// let s1 = "Do";
// let s2 = "It";
// let s3 = "Just";
// let tagline = `${s3}${s1}${s2}`
// console.log(tagline);

// 15. Задача
// Используя только переменные x, y, z и пустую строку, получить значение "60". Результат записать в переменную digits.

// Не изменяй значения переменных x, y, z;
// Для инициализации переменной digits используй x, y, z, пустую строку;
// Программа должна выводить в консоль переменную digits;
// let x = 2;
// let y = 4;
// let z = 0;
// let str = "";

// let x = 2;
// let y = 4;
// let z = 0;
// let str = "";
// let digits = (Number(x + str + z) + Number(y + str + z))
// // let digits = (Number(x + str + z) + Number(y + str + z))

// let result = x + y + str + z
// console.log(result);
// console.log(digits);



//  17. Задача
// Используя только переменные bigAmount, greatAmount и преобразование строки в число, получить число 100500. Результат записать в переменную hugeAmount.

// Не изменяй значения переменных bigAmount и greatAmount;
// Программа должна выводить в консоль переменную hugeAmount;
// let bigAmount = "500";
// let greatAmount = "100000";

// let bigAmount = "500";
// let greatAmount = "100000";
// let hugeAmount = (Number(greatAmount) + Number(bigAmount));
// console.log(hugeAmount);

// 18. Задача
// В консоль выводятся значения трех строк. Внеси изменения в код, чтобы вместо значений строк вывелась длина каждой строки. Не изменяй значение переменной emptyString.

// let emptyString = "";
// console.log(emptyString.length);
// console.log("Oh no!".length);
// let firstText = "Oh" + 2 + "yeah!"
// console.log(firstText.length)
// console.log(emptyString + 4 + 3 + "11".length);
// console.log("Oh no!");
// console.log("Oh" + 2 + "yeah!")
// console.log(emptyString + 4 + 3 + "11");

// 19. Задача
// В консоль выводится три строки.Внеси изменения в код, чтобы все буквы в этих строках стали строчными.Не изменяй значения переменных title, degree и career.

// let title = "Senior Lead Principal Software Engineer Data Architect";
// let degree = "In college, I Majored in Political Science and Minored in Religious Studies.";
// let career = "Experienced Team Leader with strong Organizational Skills and a Successful career in Management.";

// let title = "Senior Lead Principal Software Engineer Data Architect";
// console.log(title.toLowerCase());
// let degree = "In college, I Majored in Political Science and Minored in Religious Studies.";
// console.log(degree.toLowerCase());
// let career = "Experienced Team Leader with strong Organizational Skills and a Successful career in Management.";
// console.log(career.toLowerCase());

// 20. Задача
// Считай с клавиатуры три строки.А затем:

// Выведи на экран третью строку в неизменном виде;
// Выведи на экран вторую строку, предварительно преобразовав ее к верхнему регистру;
// Выведи на экран первую строку, предварительно преобразовав ее к нижнему регистру; Все три строки нужно вывести в правильном порядке: третья, вторая, первая.
// > Пример ввода:
// Строка Номер РАЗ
// Вторая строка
// Строка 3

//     > Пример вывода:
// Строка 3
// ВТОРАЯ СТРОКА
// строка номер раз

// let firstString = prompt("Pls write first string:");
// let secondString = prompt("Pls write 2nd string:");
// let thirdString = prompt("Pls write 3rd string:");

// console.log(thirdString);
// console.log(secondString.toUpperCase());
// console.log(firstString.toLowerCase());


// 21. Задача
// Запросить у пользователя 2 числа Сначала сложить эти два числа, а затем результат умножить на 3 Вывести в консоль в красивом виде:

// (10 + 20) × 3 = 90

// let firstNumber = Number(prompt("Pls write first number"));
// let secondNumber = Number(prompt("Pls write second number"));
// let result = (`${(firstNumber + secondNumber) * 3}`);
// console.log(`(${firstNumber} + ${secondNumber}) × 3 = ${result}`);

// 22. Задача
// Исправить ошибки:

// let textUser1 = 'First';
// let textUser2 = 'Second';
// let textUser3 = 'Third';

// console.log(`${"First"}\n\t${\Second /}\n${'Third'}`);

// Чтобы программа вывела в консоль:

// "First"
//     \SecondLine/
// 'Third'


// let textUser1 = 'First';
// let textUser2 = 'SecondLine';
// let textUser3 = 'Third';

// console.log(`"${textUser1}"\n\t\\${textUser2}/\n'${textUser3}'`);



