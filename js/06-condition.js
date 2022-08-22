// * ===== Condition (Условие) ===== * //
// Оператор if ()
// Оператор else
// Оператор else if ()

let userAge = 100

// Внутри if (здесь <- неявное преобразование к Boolean)
if (userAge <= 6) {
    // Попадаем сюда, если условие вернуло true
    console.log('Бесплатно');
    // if () {
    // }

} else {
    // Во всех остальных случаях
    console.log('Платно');
}


// Много условий (их может быть много)
if (userAge <= 6) {
    // Попадаем сюда, если условие вернуло true
    console.log('Бесплатно молодой');
    // Следующее условие проверяться не будет
} else if (userAge >= 55) {
    console.log('Бесплатно пенсионер');
} else {
    // Во всех остальных случаях
    console.log('Платно');
}


// if (userAge <= 6) {
//     console.log('Бесплатно молодой');
// }
// if (userAge >= 55) {
//     console.log('Бесплатно пенсионер');
// } else {
//     console.log('Платно');
// }


// else необязателен
// Если равно 100, то вывести, иначе ничего делать не нужно
if (userAge === 100) {
    console.log('!!!');
}



// * Проверка на чётность:
let num = 10
// Проверка на чётность - тоже самое, что и проверить число делится ли на 2
if (num % 2 === 0) {
    console.log('Even'); // Чётное
} else {
    console.log('Odd'); // Нечётное
}


// ! Дополнение
// Если число нечётное, то вывести ок, иначе ничего не выводить
if (num % 2 !== 0) {
    console.log('ok');
}

// * Промежутки

// let testNumber = Number(prompt('Write num'));

// * Условие попадания в промежуток
// Если число попало в промежуток от 5 до 15 не вкл, то вывести ok
// if (testNumber >= 5 && testNumber < 15) {
//     console.log('ok');
// }

// * Условие не попадания в промежуток
// Проверить не попалил ли мы в промежуток от 0 до 99 вкл

// Если не попали, то вывести окей, 
// иначе ничего выводить не нужно


// 77 - не выводим
// 101 - ок

// let userNumber = Number(prompt("Write any number pls"));
// if (userNumber < 0 || userNumber > 99) {
//     console.log("ok");
// }

// 2 вариант
// if (!(userNumber >= 0 && userNumber <= 99)) {

// }

// * Простые проверки на различные типы данных
// Как проверить перемнную на Number
let test = 10

if (typeof test === "number") {
    console.log('Number');
} else {
    console.log('Not type is Number');
}

// проверить на string/boolean - аналогично
// как проверить на null
// как проверить на undefined
// как проверить на NaN

let tester = 43
if (tester === null) {
    console.log('null');
}

if (tester === undefined) {
    console.log('undefined');
}

if (isNaN(tester)) {
    console.log('NaN');
}



// ** Дополнительная информация
// * switch - case

// Если пользователь ввёл 1, то вывести 'ok'
// Если пользователь ввёл 2, то вывести 'okokok'
// Если пользователь ввёл 3, то вывести 'ha-ha'
// Если пользователь ввёл 4, то вывести 'ahahaha'
// Если пользователь ввёл 5, то вывести 'oy'
// В противном случае вывести 'yo-yo'

// let userMessage = Number(prompt('write 1 to 5'));

// switch (userMessage) {
//     case 1:  // userMessage === 1
//         console.log('ok');
//         break;

//     case 2: console.log('okokok');
//         break;

//     case 3:
//         console.log('ha-ha');
//         break;

//     case 4:
//         console.log('ahahaha');
//         break;

//     case 5:
//         console.log('oy');
//         break;

//     default:
//         console.log('yo-yo');

// }

// if (userMessage === 1) {
//     console.log('ok');
// } else if (userMessage === 2) {
//     console.log('okokok');
// } else if (userMessage === 3) {
//     console.log('ha-ha');
// }


// * Тернарный оператор
let value = 11;

if (value % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

value % 2 === 0 ? console.log(true) : console.log(false)

console.log(value % 2 === 0 ? true : false)



// Другие случаи с тернарным оператором:

let userValue = 0;


if (userValue === 0) {
    console.log(true);
}

// Без иначе в тернарном выражении никак
userValue === 0 ? console.log(true) : null


userValue === 0 && console.log(true) // 















