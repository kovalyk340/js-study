// 1. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// console.log(100 > 59); true
// console.log(10 < 7); false
// console.log(8 <= 8); true
// console.log(10 !== 9); true
// console.log(77 === 77); true

// console.log('test' === 'test'); true
// console.log('test' === 'Test'); false
// console.log('tester' === 'tes1er'); false
// console.log('string' !== 'String'); true
// console.log('px' !== 'mm'); true

// 2. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// let num = "10"
// console.log(typeof num === "number"); false ошибся

// 3. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// let text = "Victor"
// console.log(typeof text === "String"); // false

// 4. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// let isTest = true;
// console.log(typeof isTest === "boolian"); false

// 5. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// let num = 10;
// console.log(typeof (typeof isTest) === "number"); false


// 6. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(Number("0")); 0
// console.log(Number("10")); 10
// console.log(Number("")); 0
// console.log(Number(null)); 0
// console.log(Number("  ")); 0
// console.log(Number(true)); 1

// console.log(Number("20px"));NaN
// console.log(Number(undefined)); NaN
// console.log(Number(false));0
// console.log(Number("true")); NaN
// console.log(Number("00100")); 100 ошибся
// console.log(Number(" ")); 0

// 7. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// let a = 20;
// let b = "20";

// console.log(a === b); false
// console.log(a == b); true
// console.log(a >= b); true
// console.log(a <= b); true
// console.log(a != b); false
// console.log(a !== b); true

// 8. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// let a = 22;
// let b = 12; 

// console.log(a === b); false
// console.log(a == b); false
// console.log(a >= b); true
// console.log(a <= b); false
// console.log(a != b); true
// console.log(a !== b); true

// 9. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// let c = 55;
// let b = "55"; 

// console.log(a === b); false
// console.log(a == b); true
// console.log(a >= b); true
// console.log(a <= b); true
// console.log(a != b); false
// console.log(a !== b); true

// 10. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(NaN == NaN); false
// console.log(NaN === NaN); false
// console.log(false == "false"); false ошибся
// console.log(true == "true"); false
// console.log(isNaN(10 + "5")); false

// console.log(isNaN(10 - "5")); false
// console.log(isNaN(false)); false
// console.log("" == false); true
// console.log("0" == false); true
// console.log(10 == true); false

// 11. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(null == undefined); true
// console.log('Кит' < 'Киндер'); false
// console.log(0 == ""); true
// console.log('Я' > 'Ю'); true
// console.log(null == false); false
// console.log(null == 0); false

// console.log(isNaN(10 - "10") == 1); false
// console.log("" == false); true
// console.log(null === undefined); false
// console.log(17 >= 17); true
// console.log('U' > 'Z'); false
// console.log(undefined === undefined); true

// 12. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(false == 0); true
// console.log(15 + 5 === "20"); false
// console.log(15 <= "15");true
// console.log("t" == 1); false
// console.log('2' > 1); true
// console.log(5 - '2' > '1'); true

// console.log(17 + 3 == 21 - "1"); true
// console.log(" " == 0); true
// console.log("05" > 4); true
// console.log(100 - 47 == 40 + "13"); false
// console.log(true == -1); false
// console.log(10 - '10' >= null); //true ошибка не понимаю почему тут тру

// 13. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(17 + 3 === 20 && 20 - 3 == "17"); true
// console.log(50 + 50 == "100" || (!false && !NaN && !(27 + 3 === "30"))); true
// console.log(Number("100") === 100); true
// console.log(typeof "" === "String"); false
// console.log(Number(String(10) + 0) === 100); true

// console.log(typeof false === "Boolean"); false
// console.log(50 + String(Number(Boolean(null))) == 500 || false); true
// console.log(!"" && !null && !(2 + 2 * 2 === 8)); true
// console.log(5 > 3 && 7 < 10 && 5 == "5"); true
// console.log(typeof true == "boolean"); true

// console.log(!'');
// console.log(!Boolean('')); // !false -> true
// console.log(!!''); // Быстрое привдеение к типу Boolean
// console.log(!11); // false
// console.log(!!!11);  // !!!true -> !!false -> !true -> false
// console.log(!!null); // !!false -> false
// console.log(!false); // true
// console.log(!!' '); // true


// 14. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(true || false); true
// console.log(false && true); false
// console.log(false || true && true); true oshibsya
// console.log(false || true && false); false
// console.log(false && true || true); true
// console.log(false && true || true && (false || true)); true

// console.log(6 > 3 || 4 < 1); true
// console.log(6 >= 6 && 10 < 15); true
// console.log(6 > 9 || 5 > 3 && 7 > 4); true
// console.log(6 > 9 || 1 > 3 && 7 > 4); false
// console.log(10 != 10 && 5 == 5 || -5 > -9); true
// console.log(7 >= 9 && 5 == 5 || 7 > 3 && (14 < 10 || 10 > 9)); true


// TODO:
// 15. Задача
// Измените приоритет действий, чтобы в консоль вывелась истина.

// console.log((72 / 12 + 6) * 4 === 48);
// console.log(72 / 12 + 6 * 4 === 30);
// console.log(72 / (12 + 6) * 4 === 16);
// console.log(72 / (12 + 6 * 4) === 2);


// console.log((120 - 40) / 5 - 2 === 14);

// console.log(72000 / 800 / (5 + 40) === 2);
// 72000 / 800 = 90
// 90 / 45 = 2

// console.log(false == null || true == 1 && 0 === "");

// console.log(true && true || false);
// console.log(false || true && false);
// console.log(!false && true);


// 16. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(Boolean("")); // false
// console.log(Boolean("false"));
// console.log(Boolean("true"));
// console.log(Boolean("true1"));

// console.log(Boolean(NaN)); 
// console.log(Boolean(100));
// console.log(Boolean(null));

// console.log(Boolean(-1));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean("0"));
// console.log(Boolean(" "));

// 17. ★ Задача ★
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// console.log(3 && 2); // 2
// console.log(1 || 0); // 1
// console.log(4 && !0); // 4 && true -> true
// console.log(!null && !""); // true && true -> true
// console.log(3 || true && 1); 
// console.log(3 || true && 1); // 3

// console.log(true && true || false); // true
// console.log(1 && 1 || 0); // 1
// console.log('t' && 'a' || ''); // 'a'
// console.log('t' && 'a' || '' && NaN); // 'a';
// console.log('t' && !'' || !'' && !NaN); // true

// 18. ★ Задача ★
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// const serverLogin = '';
// const answer = serverLogin || 'default log';
// console.log(answer); default log

// 19. ★ Задача ★
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(5 > 3 && 7 < 10 && 5 == "5" || false && "1"); true
// console.log(5 > 3 && 7 < 10 && 5 == "5" && false || "1"); 1
// console.log(3 && 5 && null && 4); null
// console.log(1 && 0 && 10 && 3); 0
// console.log(1 && 100 && 2 && 0 );0
// console.log(1 && 100 && 2 && 50); 50

// console.log(null || 0 || undefined); undefined
// console.log(1 || 0 || true || false); 1
// console.log(0 || 0 || 0 || 0 || 1);1
// console.log((0 || 0 || 2) && ("" || NaN)); NaN
// console.log(null || 0 || false || undefined || "" || -1 || NaN || 1); -1