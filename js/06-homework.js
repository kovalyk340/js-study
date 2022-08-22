// 1. Задача
// Запросить у пользователя число. Если оно равно 108, то вывести в консоль: Ом.
// let userNumber = Number(prompt("Введите любое число"));
// if (userNumber == 108) {
//     console.log("Ом");
// }

// 2. Задача
// Запросить у пользователя 2 числа. Вывести в консоль наименьшее число. Если числа одинаковые, то вывести любое из этих чисел.
// let firstNum = Number(prompt("Введите первое число:"));
// let secondNum = Number(prompt("Введите второе число:"));
// if (firstNum <= secondNum) {
//     console.log(firstNum);
// } else {
//     console.log(secondNum);
// }

// 3. Задача
// Запросить одно число, проверить на чётность. Если число чётное, то вывести true, иначе false.
// let userNumber = Number(prompt("Введите любое число"));
// if (userNumber % 2 === 0) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// 4. Задача
// Запросить у пользователя число. Если оно чётное или делится на 7, то вывести в терминал: okey, иначе: error.

// let userNumber = Number(prompt("Введите любое число"));
// if (userNumber % 2 === 0 || userNumber % 7 === 0) {
//     console.log("okey");
// } else {
//     console.log("error");
// }



// 5. Задача
// Запросить 1 число и 1 строку. Если число чётное, то к строке добавить =even=. Иначе добавить к строке =odd=.
// let userNumber = Number(prompt("Введите любое число:"));
// let userText = prompt("Введите любой текст:")
// if (userNumber % 2 == 0) {
//     console.log(userText + "=even=");
// } else {
//     console.log(userText + "=odd=");
// }

// 6. Задача
// Запросить 2 числа, проверить на чётность первое число, а второе - делится ли на 3.

// Если оба числа удовлетворяют условиям, то вывести: plus plus.
// Если хотя бы одно число удовлетворяет условиям, то: plus.
// Если ни одно не удовлетворяет, то: minus.

// let firstNum = Number(prompt("Введите первое число:"));
// let secondNum = Number(prompt("Введите второе число:"));
// if (firstNum % 2 == 0 && secondNum % 3 == 0) {
//     console.log("plus plus");
// } else if (firstNum % 2 == 0 || secondNum % 3 == 0) {
//     console.log("plus");
// } else {
//     console.log("minus");
// }

// 7. Задача
// Запросить имя и возраст. Если возраст больше или равно 18, то вывести: Добро пожаловать, <имя>!. Иначе вывести: <имя>, ваш возраст - <возраст>, вам доступ запрещён!.
// let nameUser = prompt("Введите ваше имя:");
// let ageUser = Number(prompt("Введите ваш возраст:"));
// if (ageUser >= 18) {
//     console.log("Добро пожаловать, " + nameUser + "!");
// } else {
//     console.log(`${nameUser}, ваш возраст - ${ageUser}, вам доступ запрещён!`);
// }

// 8. Задача
// Создать 2 переменные, присвоить им значения: на улице холодно и на улице тепло соответственно. Запросить у пользователя с клавиатуры температуру на улице. Если температура выше 0, вывести надпись: на улице тепло, в противном случае вывести надпись: на улице холодно.

// let coldWeather = "На улице холодно";
// let warmWeather = "На улице тепло";
// let userWeather = prompt("Введите температуру(в цельсиях) на улице:");
// if (userWeather > 0) {
//     console.log(warmWeather);
// } else {
//     console.log(coldWeather);
// }

// 9. Задача
// Пользователя просят ввести число.

// Если это число от 0 до 10, то выводим: thin;
// Если же это число от 10 до 20 вкл, то выводим: medium;
// Если же это число от 21 до 50 не вкл, то выводим: extra; В противном случае ничего не делаем.
// let userNumber = Number(prompt("Введите любое число:"));
// if (userNumber >= 0 && userNumber < 10) {
//     console.log("thin");
// } else if (userNumber >= 10 && userNumber <= 20) {
//     console.log("medium");
// } else if (userNumber >= 21 && userNumber < 50) {
//     console.log("extra");
// }

// 10. Задача
// Пользователя просят ввести число. Если он не попал в промежуток от 10 до 21 вкл, то вывести в консоль: Luck.
// let userNumber = Number(prompt("Введите любое число:"));
// if (usernumber < 10 || userNumber > 21) {
//     console.log("Luck");
// }

// 11. Задача
// Ввести с клавиатуры имя и возраст. Если возраст в пределах 18-27 включительно, то вывести надпись: ИМЯ, явитесь в военкомат, где ИМЯ - это имя, введенное ранее с клавиатуры. Если возраст не находится в указанных пределах, то ничего выводить не нужно.

// let nameUser = prompt("Введите ваше имя:");
// let ageUser = Number(prompt("Введите ваш возраст:"));
// if (ageUser >= 18 && ageUser < 27) {
//     console.log(nameUser.toUpperCase() + ", явитесь в военкомат");
// }

// 12. Задача
// Исправьте ошибки, чтобы код выполнял следующую задачу: Пользователя запрашивают возраст и программа определяет, нужно ему в школу или уже пора в институт. Но она работает неправильно. Например, пятилетнего ребенка отправляют в институт!

// let age = prompt();
// if (age < 18) {
//     // Школьник
//     // Дет сад
//     // Ясли
//     if (age >= 6) {
//         console.log("нужно ходить в школу");
//     }
// } else {
//     console.log("пора в институт");
// }


// let age = Number(prompt("Введите ваш возраст:"));
// if (age < 18 || age >= 6) {
//     console.log("нужно ходить в школу");
// } else {
//     console.log("пора в институт");
// }

// 13. Задача
// Исправьте ошибки, чтобы код выполнял следующую задачу: Пользователя запрашивают ввести любой текст. Если количество символов в введённом слове больше 7, то в консоль выводится текст в верхнем регистре, иначе - в нижнем регистре.

// let textuser = prompt();
// 	if textuser > 7:
// 		console.log(TEXTUSER);
// 	else
// 		console.log(textuser);

// let textUser = prompt("Введите любой текст:");
// if (textUser.length > 7) {
//     console.log(textUser.toUpperCase());
// } else {
//     console.log(textUser.toLowerCase());
// }

// 14. Задача
// Сделать рефакторинг кода и исправьте ошибки. Пользователя просят ввести 1 число с клавиатуры.

// Если это число чётное, то вывести только: even;
// Если это число делится на 7, то вывести только: multiple;
// Но если это число и чётное, и делится на 7, то вывести только: even & multiple;

// let numberUser = Number(prompt("Введите любое число"));
// if (numberUser % 2 == 0 && numberUser % 7 == 0) {
//     console.log("even & multiple;");
// } else if (numberUser % 2 == 0) {
//     console.log("even");
// } else if (numberUser % 7 == 0) {
//     console.log("multiple");
// }

// 15. Задача
// Напиши программу, которая считывает с клавиатуры две строки и выдает сообщение о том, одинаковые ли эти строки.

// Если строки одинаковые, то программа должна вывести сообщение строки одинаковые;
// Если строки разные, то программа должна вывести сообщение строки разные;

// let firstText = prompt("Введите любой текст:");
// let secondText = prompt("Введите любой текст еще раз:");
// if (firstText == secondText) {
//     console.log("строки одинаковые");
// } else {
//     console.log("строки разные");
// }

// 16. Задача
// Напиши программу, которая считывает с клавиатуры две строки и выдает сообщение о том, одинаковое ли количество символов.

// Если строки одинаковые имееют одинаковое количество символов, то вывести сообщение Количество совпадает;
// Если строки имеют разное количество символов, то программа должна вывести сообщение Не совпадает;

// let firstText = prompt("Введите любой текст:");
// let secondText = prompt("Введите любой текст еще раз:");
// if (firstText.length == secondText.length) {
//     console.log("Количество совпадает");
// } else {
//     console.log("Не совпадает");
// }

// 17. Задача
// Есть секретное слово для доступа к закрытой информации, но у пользователя сломалась клавиатура, и теперь невозможно набирать буквы в верхнем регистре. Напиши программу, которая будет сравнивать введенную строку со строкой из переменной secret, не учитывая регистр.
// Если введенная строка равна строке из переменной secret, программа выводит на экран сообщение доступ разрешен. В ином случае - доступ запрещен.

// let secret = "AmIGo";
// let textUser = prompt("Введите секретное слово:");
// if (secret.toLowerCase() === textUser.toLowerCase()) {
//     console.log("Доступ разрешен");
// } else {
//     console.log("Доступ запрещен");
// }


// ★ 18. Задача ★
// Запросить у пользователя 3 числа. Найти наибольшее число. Если числа одинаковые, то вывести любое число.

// let firstNum = Number(prompt("Введите первое число:"));
// let secondNum = Number(prompt("Введите второе число:"));
// let thirdNum = Number(prompt("Введите третье число"));

// if (firstNum >= secondNum && firstNum >= thirdNum) {
//     console.log(firstNum);
// } else if (secondNum > firstNum && secondNum > thirdNum) {
//     console.log(secondNum);
// } else {
//     console.log(thirdNum);
// } 



// * 20. Задача *
// let anotherTest = '';
// let isAccess = true;
// if (isAccess) {
//     var test = "mp4";
// }
// if (isAccess) {
//     anotherTest = "mkv";
// }

// console.log(test); // mp4
// console.log(anotherTest); // ReferenceError



// ★ 21. Задача ★
// Вы дополните консоль, используя оператором переключатель.
// Пользователя просят ввести 1 символ:

// Если это "a", то вывести в консоль "alpha";
// Если это "b", то вывести в консоль "beta";
// Если это "c", то вывести в консоль "gamma";
// Если это "1", то вывести в консоль "4";
// Если это "2", то вывести в консоль "8";
// Если это "3", то вывести в консоль "15"; Во всех остальных случаях выводится: "ошибка";

// let userNumber = prompt("Введите любой символ ( 1-3 || a-c)")


// switch (userNumber) {
//     case "a":
//         console.log("alpha");
//         break;
//     case "b":
//         console.log("beta");
//         break;
//     case "c":
//         console.log("gamma");
//         break;
//     case "1":
//         console.log("4");
//         break;
//     case "2":
//         console.log("8");
//         break;
//     case "3":
//         console.log("1");
//         break;
//     default:
//         console.log("error");
// }

// ★ 22. Задача ★
// Решить задачи: 1, 3, 5, 9, используя тернарным оператором.

// let userNumber = Number(prompt("Введите любое число"));
// userNumber === 108 ? console.log("Ом") : null
// userNumber === 108 && console.log("Ом")


// let userNumber = Number(prompt("Введите любое число"));
// userNumber % 2 === 0 ? console.log("четное") : console.log("нечетное");
// console.log(userNumber % 2 === 0 ? "четное" : "нечетное");

// let userNumber = Number(prompt("Введите любое число:"));
// let userText = prompt("Введите любой текст:")
// userNumber % 2 === 0 ? console.log(userText) : console.log(userText + "=odd=");


// 9. Задача
// Пользователя просят ввести число.

// Если это число от 0 до 10, то выводим: thin;
// Если же это число от 10 до 20 вкл, то выводим: medium;
// Если же это число от 21 до 50 не вкл, то выводим: extra; В противном случае ничего не делаем.

// let userNumber = Number(prompt("Введите любое число:"));
// userNumber >= 0 && userNumber < 10 ? console.log("thin") : userNumber >= 10 && userNumber <= 20 ? console.log("medium") : userNumber >= 21 && userNumber < 50 ? console.log("extra") : null;




