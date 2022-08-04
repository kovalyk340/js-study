// * ===== string (строковый тип) ===== * //

// * Esc-последовательности (внутри кавычек)
// \n - enter
// \t - tab
// \' - '
// \" - "
// \\ - \ - backslash
// 

// ! Более редкие
// \r - возврат каретки  (\n\r)
// \b - backspace
// \f - form feed


console.log('\'T\\e\nxt');


// Узнать количество символов в строке
let text = 'fsdfsdfsdf fdsfds fdsf sdf ds fsd f                  ';
console.log(text.length); // 53


let testString = "ALex"
// Функции не меняют исходную строку
console.log(testString.toLowerCase()); // 'alex'
console.log(testString.toUpperCase()); // 'ALEX'

console.log(testString);


let numStr = String(24);
console.log(numStr);
console.log(24);


// * Как вывести в консоль?

let number = 10
let number2 = 7

console.log(number + " + " + number2 + " = " + (number + number2));

// Шаблонные литералы
console.log(`${number} + ${number2} = ${number + number2}`);



console.log(String(123)); // '123'
console.log(String(-12.3)); // '-12.3'
console.log(String(null)); // 'null'
console.log(String(undefined)); // 'undefined'
console.log(String(true)); // 'true'
console.log(String(false)); // 'false'

console.log(true - 1); // 0







