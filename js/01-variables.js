// * ===== variables (Перменные) ===== * //

// - однстрочный коммент
/*
    Многстрочный
    Комментарий
*/

// Перменные хранят данные
// Стиль написания: lowerCamelCase
// Названия: Название должно отражать суть того, что в ней хранится

// "=" - знак присвоения (процесс инициализации переменной)
// ! Нельзя создавать перменную с таким же именем повторно

// 1. Объявление переменной (создание)
// 2. Инициализация переменной (=)

let userSecretNumber; // Объявление переменной
userSecretNumber = 108; // Инициализация

let userSecretNum = 108;


// * Типы данных
// undefined
// null

// number 2e53-1
// string
// boolean

// -------- //
// object (function, array, object) <--- 8 тема +

// ! bigint 
// ! symbol


// * 1. undefined & null

let superVar; // undefined

// let testVar = undefined; // ! На практике так лучше не делать
let testVar = null; // Пустое значение

// * 2. number (от -2 * 10^53 + 1 до 2 * 10^53 - 1)
// 2e53-1 = 2 * 10^53 - 1
// e -> *10^(...)

// NaN - Not a Number
// Infinity
// -Infinity

let numUser = 53;

// * 3. String

let textUser = 'user text'

// * 4. Boolean (true / false)
// Должны начинаться на is (является)/ has (имеет)

let isMonster = false;
let hasAccessStudy = true;
let isChecked = true;


// var - устаревшее значение
var isMonsterSnake1 = true;
var isMonsterSnake1 = 'text bla-bla-bla';


let isMonsterSnake2 = true;
// let isMonsterSnake2 = true;
isMonsterSnake2 = false; // Перезаписать переменную/ переопрделеить


const isMonsterSnake3 = true;
// isMonsterSnake3 = false; // ! Константу изменять нельзя

// У числовых / текстовых констант
const PI = 3.1415;
const EXP = 2.718;
const ACTION_TYPE_1 = 'Move';
const ACTION_TYPE_2 = 'Stop';

