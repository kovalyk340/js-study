// 1. Задача
// Создать массив любой длины, состоящий из чисел. Вывести в консоль количество элементов в массиве.

// const arrNum = [1, 2, 3, 4, 5, 6];
// console.log(arrNum.length);

// 2. Задача
// Создать массив любой длины, состоящий из чисел. Вывести в консоль индекс последнего элемента. Код должен работать для массива любой длины.

const arrNum = [1, 2, 3, 654, 65]
// console.log(arrNum.length); // 5
// console.log(arrNum.length - 1); // * Индекс последнего элемнта
// console.log(arrNum[2]);
// console.log(arrNum[arrNum.length - 1]); // ! Последний элемент


// 3. Задача
// Создать массив любой длины, состоящий из чисел. Вывести в консоль самый первый и последний элементы. Код должен работать для массива любой длины.

// const arrNum = [1, 2, 3, 4, 5, 6]
// console.log("Первый элемент:" + arrNum[0]);
// console.log("Последний элемент:" + arrNum[arrNum.length - 1]);

// 4. Задача
// Создать массив любой длины, состоящий из чисел. Вывести значение предпоследнего элемента. Код должен работать для массива любой длины
// const arrNum = [1, 2, 3, 4, 5, 6];
// console.log(arrNum[arrNum.length - 2]);

// 5. Задача
// Создать массив любой длины, состоящий из строк. Удалить последний элемент. А затем добавить 1 элемент в конец массива со значением new. Вывести в консоль получившийся массив.
// const arrText = ['hi', 'hello', 'zdoroff'];
// arrText.pop()
// arrText.push("new")
// console.log(arrText);

// 6. Задача
// Создать массив любой длины, состоящий из строк.Удалить последний элемент и вывести получившийся массив.Затем вывести значение удалённого элемента.
// const arrText = ['hi', 'hello', hi boys and girls];
// const deleteItem = arrText.pop();
// console.log(arrText);
// console.log(deleteItem);

// 7. Задача
// Создать массив с любым количеством элементов и любым типом данных внутри. Если элементов больше 5, то вывести в консоль "окей" Иначе ничего не выводить.

// const arrNums = [1, 2, 3, 4, 5]
// if (arrNums.length > 5) {
//     console.log("okey");
// } 

// 8. Задача
// Создать массив любой длины, состоящий из чисел. Если последний элемент чётный, то удалить его из массива, а затем вывести в консоль. В противном случае просто вывести первый элемент массива.
// const arrNums = [1, 2, 3, 4, 6]
// if (arrNums[arrNums.length - 1] % 2 === 0) {
//     const deleteItem = arrNums.pop();
//     console.log(deleteItem);
// } else {
//     console.log(arrNums[0]);
// }

// 9. Задача РАЗОБРАТЬ!!
// Дан массив чисел. Вывести массив поэлементно в консоль.

// const numberList = [13, 54, 32, 75, 43, 65, 89, 53];
// for (let i = 0; i < numberList.length; i++) {
//     console.log(numberList[i]);
// }





// 10. Задача
// Создать массив любой длины, состоящий из чисел. Если значение первого элемента больше значения последнего элемента, то добавить в конец массива текст more, Иначе удалить последний элемент.
// const numberList = [13, 54, 32, 75, 43, 65, 89, 5];
// if (numberList[0] > numberList[numberList.length - 1]) {
//     numberList.push("more");
//     console.log(numberList);
// } else {
//     numberList.pop();
//     console.log(numberList);
// }

// 11. Задача
// Создать массив любой длины, состоящий из чисел. Добавлять к каждому третьему элементу массива строку: =x3=. Вывести в консоль получившийся массив.
// const numberArr = [1, 5, 6, 7, 10]
// if (numberArr % 3 === 0) {
//     console.log(numberArr + "=x3=");
// }


// 12. Задача
// Дан массив чисел. Вывести в консоль элементы массива в столбик в обратном порядке.

const numberList = [99, 88, 77, 66, 55];
// console.log(numberList.reverse());


// console.log(numberList[0]);
// console.log(numberList[1]);
// console.log(numberList[2]);
// console.log(numberList[3]);
// console.log(numberList[4]);

// for (let i = 0; i < numberList.length; i++) {
//     console.log(numberList[i]);

// }

// let i = numberList.length
for (let i = numberList.length - 1; i >= 0; i--) {
    // if (i >= 0) {
    console.log(numberList[i]);
    // } else {
    // -> to end cycle
    // }

    // i--
}
// end cycle<-