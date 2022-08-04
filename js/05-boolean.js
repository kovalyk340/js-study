// * ===== boolean (логический тип данных) ===== * //

let hasCompare = 8 > 7;
console.log(hasCompare);

// ? Операторы сравнения - возвращают булевый результат
// * Если типы данных РАЗНЫЕ, то происходит неявное преобразование к типу Number
// ! Искл: NaN == NaN -> false
// ! Искл: null & undefined не приводятся к типу Number
// ! Искл: null == undefined -> true


// Больше                       >
// Больше или равно             >=
// Меньше                       <
// Меньше или равно             <=

// Равно                        == (Здесь неявное приведение типов)
// Равно                        === (Строгое равенство)
// Не Равно                     != (Здесь неявное приведение типов)
// Не Равно                     !== (Строгое неравенство)


console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 == 10); // true
console.log(10 == '10'); // true ! Неявное преобразование
console.log(10 === '10'); // false
console.log('10' == '10'); // true 
console.log('7' > 3); // true

console.log(null == 0); // false
console.log(null == undefined); // true
console.log(undefined == NaN); // false
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log(true == 1); // true
console.log(true == 11); // false
console.log(true == '1'); // true
console.log(true == '1'); // true

console.log(true <= '1'); // true
console.log(10 >= '10'); // true
console.log('10px' == '10px'); // true


// ? Как проверить число на NaN
// let testNumber = Number(prompt('Write text/num'));
// console.log(`Check NaN: ${isNaN(testNumber)}`);

// * Проверяем с помощью isNaN()


console.log('a' == 'b'); // false
console.log('a' == 'a'); // true
console.log('a' > 'b'); // false 0041 > 0042
console.log('b' > 'a'); // false 0042 > 0041
console.log('Alex' > 'Abram'); // true 
console.log('a' > 'A'); // true (маленькие буквы расположены дальше d UnicodeTable) 


console.log('aBram' > 'Alex'); // true 
console.log('aBram'.toLowerCase() > 'Alex'.toLowerCase()); // true 




// ? Логические операторы
// ! Возвращают тот тип данных, с которым работал

// * Приоритеты:
// ()
// Матем:
// **
// * / %
// + - (конкатенация)
// Сравнение:
// == >= и т.д.
// Логические:
// !    - **
// &&   - *
// ||   - +

// Логическое И         &&
// Логическое ИЛИ       ||
// Логическое НЕ        !


// * Таблица истинности &&
// true     && true = true (Выполняется когда и тот, и тот истина)
// false    && true = false
// true     && false = false
// false    && false = false

// * Таблица истинности ||
// true     && true = true 
// false    && true = true
// true     && false = true
// false    && false = false (Не выполняется когда и тот, и тот ложный)

// * Таблица истинности !
// !true -> false
// !false -> true


console.log(5 + 1 > 3 && 3 < 10); // true
console.log(true && true); // true

console.log(5 > 7 && 3 < 10); // false
console.log(5 > 7 && 33 < 10); // false

console.log(!(7 > 10) && 4 < 1 + 7); // true
console.log(!(7 > 10) && 4 < 4); // false 
console.log(!(7 > 10) || 4 < 4); // true 



// Для решения таких задач мысленно используем неявное преобразование к Boolean

// * String
console.log(Boolean('')); // false Толькона она даёт такой результат
console.log(Boolean(' ')); // true
console.log(Boolean('    ')); // true
console.log(Boolean('t')); // true
console.log(Boolean('1')); // true

// * Number
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(10)); // true
console.log(Boolean(-10)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true
console.log(Boolean(NaN)); // false

// * null & undefined
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false



// ! Возвращает первую истину или последнюю ложь
console.log(null || 7); // 7 (потому что она дала true)
console.log(7 || null); // 7
console.log(true || 0);  // true || false -> true -> true
console.log(1 || 'text'); // true(1) || true(2) -> true(1) -> 1
console.log(0 || null); // false(1) || false(2) -> null


// ! Возвращает первую ложь или последнюю истину
console.log(1 && 0); // true && false -> false -> 0
console.log(17 && 8 && 0 && 3); // 0
console.log(17 && 8 && 1 && 3); // 3
console.log(undefined && 0 && 1 && 5); // undefined


console.log(null || 0 || NaN || 4 || ' ' || 'text');
// false(1) || false(2) || false(3) || true(1) || true(2) || true(3) -> true(1) -> 4
console.log(false || false || true || 1); // true



console.log(5 > 3 && 7 < 10 && 5 == "5" || false && "1"); // 
console.log(5 > 3 && 7 < 10 && 5 == "5" && false || "1");
console.log(3 && 5 && null && 4); // null
console.log(1 && 0 && 10 && 3); // 0
console.log(1 && 100 && 2 && 0); // 0
console.log(1 && 100 && 2 && 50); // 50
console.log(null || 0 || undefined); // undefined
console.log(1 || 0 || true || false); // 1
console.log(0 || 0 || 0 || 0 || 1); // 1
console.log((0 || 0 || 2) && ("" || NaN)); // NaN
console.log(null || 0 || false || undefined || "" || -1 || NaN || 1); // -1
console.log(!!null || !!!false && !""); // true
console.log(5 > 3 && 1 && !null); // true
console.log('text' || 5 > 3 || null); // 'text'
console.log(!'text' || 5 > 3 || undefined); // true
console.log(undefined && false && null && 0); // undefined
console.log(false && 'image'); // false
console.log(!0 && !null && !undefined && !NaN && !' ' && !false && !''); // false
console.log(!!!false && (!!!true || !!!false)); // true
console.log('false' && true && !'' && true); // true
console.log('false' || true || !'' || true); // 'false'



// !'text' <==> !Boolean('text')




// console.log(false || 0 || ' ' || undefined); // 7



