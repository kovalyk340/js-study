// * ===== немного теории ===== * //

// * Примитивы
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined

// * Ссылочный тип [структура данных]
// 6. object -> [Array, Function, Object, Arguments]
//              [NodeList, HTMLCollection, Map, Set, WeekMap, WeekSet]
//              [ReferenceError, TypeError, SyntaxError, Error, Promise]

// 7. BigInt
// 8. Symbol


// * ===== array (Массивы) ===== * //
// * CRUD - Create Read Update Delete
// const COLOR_BLACK = '#000'

const arrTest = [] // Пустой массив

//                    0         1       2        3
const usersNames = ['Pavel', 'David', 'Paul', 'Maks']
console.log(usersNames);


// * Кол-во элементов
const countItems = usersNames.length
console.log(countItems);


// * Вывод конкретного элемента массива

console.log(usersNames[0]); // Первый элемент(нулевой) 
console.log(usersNames[1]);
console.log(usersNames[2]);
console.log(usersNames[3]); // 'Maks'

// ! Вывод последнего элемента, если количество элементов неизвестно
console.log(usersNames[usersNames.length - 1]); // 'Maks'
// Предпоследний
console.log(usersNames[usersNames.length - 2]); // 'Maks'


// * == Методы массивов (функции)

const taskArray = [4, 8, 15, 16, 23, 42]

// 1. <array>.push(...items) - добавляет элемент/ы в конец массива, изменяя сам массив (мутирует)
// push возвращает число - новую длину массива ! редко используется

console.log(taskArray.push(7, 3, 1)); // 9
taskArray.push(99);
console.log(taskArray); //  [4, 8, 15, 16, 23, 42, 7, 3, 1, 99]


// 2. <array>.pop() - удаляет ОДИН ПОСЛЕДНИЙ элемент, изменяя сам массив (мутирует)

taskArray.pop()
console.log(taskArray); // [4, 8, 15, 16, 23, 42, 7, 3, 1]

// 3. <array>.unshift(...items) добавляет элемент/ы в начало массива, изменяя сам массив (мутирует)
// unshift возвращает число - новую длину массива ! редко используется

// 4. <array>.shift() - удаляет ОДИН ПЕРВЫЙ элемент, изменяя сам массив (мутирует)


// 5. Array.isArray(<variable>) - проверяет на массив (если массив, то вернёт true, иначе false)

console.log(typeof []);
console.log(typeof {});
console.log(Array.isArray([]));
console.log(Array.isArray({}));



// * == Обратить ко всем сразу элементам массива (НЕЛЬЗЯ)

for (let i = 0; i < taskArray.length; i++) {
    // console.log(taskArray); // Массив
    console.log(taskArray[i]); // Элемент массива
    // console.log(i); // Индекс

    taskArray[i] *= 2
}







