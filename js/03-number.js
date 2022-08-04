// * ===== Number ===== * //

// + - / *
// ** - вовездение в степень
// % - деление по модулю (остаток при делении)


console.log(3 + 7);
// Выполнить сложение и записать в красивом (подробном виде)

"3 + 7 = 10"

// let num1 = 3;
// let num2 = 7;

// console.log(num1 + " + " + num2 + " = " + (num1 + num2));

// Порядок действия такой же как в математике
// Строка + Строка = Строка
// Число + Строка = Строка
// Строка + Число = Строка

// Число + Число = Число

console.log(4 + '6'); // '46'
console.log(4 + 6); // 10


// let num1 = 3;
// let num2 = 7;
// let result = num1 + num2
// console.log(num1 + " + " + num2 + " = " + result);


let num1 = 3;
let num2 = 7;

// "3 - 7 = 3"
console.log(num1 + " - " + num2 + " = " + num1 - num2);
// - * / % ** - операторы чисел, поэтому они неявно приводят другие переменные к этому типу


// Неявное преобразование JS
console.log('10' - 5); // 5
console.log('10px' - 5); // NaN - 5 = NaN
console.log("3 - 7 = 3" - 7); // NaN
console.log(Number("3 - 7 = 3")); // NaN
console.log(Number('10px')); // NaN


// * % Деление по модулю (остаток при делении)


console.log(17 / 6); // 2.8333333333333335
console.log(17 % 6); // 5 - остаток



// * Получить целое при делении
console.log(parseInt(17 / 6));


console.log(70); // 1 час и 10 минут
console.log(parseInt(70 / 60)); // 1 час
console.log(70 % 60); // 10 минут

console.log(2345); // 1 час и 10 минут
console.log(parseInt(2345 / 60)); // 39 часов
// 39.083333333333336
console.log(2345 % 60); // 5 минут



console.log(6345 / 54.543);
console.log(6345 % 54.543);



// * Инкремент / Декремент * //

let index = 1;


// console.log(index++); // 1
// console.log(++index); // 3
//  ! Работает только с переменными

index++ // index = index + 1 / 
index += 7 // index = index + 7

// *= -= /= %= += **=

console.log(index);


let a = 2
// let x = 1 + ++a

let x = 1 + (a += 3)

console.log(x);


// * Неявное преобразование
// * При - * / % ** оба операнда преобразуются к number
// Number() - от люббого символа, кроме числа, даёт NaN

// console.log('3' + 2);
// console.log('3' + '2');
// console.log('3' - '2');
// console.log("25" + (7 + 5));
// console.log("100" / 5);
// console.log("100px" / 5);
// console.log("100 - 2" / 5);
// console.log('5' * '5');
// console.log('10px' - '5px');

console.log(Number('px')); // NaN
console.log(Number('60px')); // NaN
console.log(Number('1')); // 1
console.log(Number('0')); // 0
console.log(Number('')); // 0
console.log(Number(' ')); // 0
console.log(Number('        ')); // 0
console.log(Number('   10    ')); // 10

console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(Number(null)); // 0

//!Не путать
console.log(typeof null); // 'object'

console.log(Number(undefined)); // NaN


console.log(typeof 0);
console.log(typeof 1);
console.log(typeof 10);
console.log(typeof -10);
console.log(typeof -103.5);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof -Infinity);









