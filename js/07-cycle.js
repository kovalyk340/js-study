// * ====== Cycle (цикл) ====== * //


// * 1. Цикл for
// Вывести 'ок' 10 раз

// Начальное значение, условие работы цикла, шаг цикла
// let живёт внутри цикла
for (let i = 0; i < 3; i++) {
    // i < 10

    // debugger
    console.log(i);
    console.log('ok');

    // i++
}



// i = 0
// i < 3
//  console.log('ok');

// i = 1
// i < 3
//  console.log('ok');

// i = 2
// i < 3
//  console.log('ok');

// i = 3
// i < 3 - конец цикла


for (let i = 9; i > 0; i--) {
    // console.log(i);

    if (i === 5) {
        console.log('222');
    } else {
        console.log('111');
    }
}


for (let i = 9; i > 0; i--) {
    // console.log(i);

    if (i === 5) {
        break; // досрочно покинуть цикл
    }
    if (i === 7) {
        continue; // Пропустить итерацию, сразу перейти к i--
    }
    console.log(i);
}


// * 2. while - цикл с предусловием
// Пока какое-то условие выполняется - выполняй

// let i = 9
// while (i > 0) {
//     if (i === 5) {
//         break; // досрочно покинуть цикл
//     }
//     if (i === 7) {
//         i--
//         continue; // Пропустить итерацию, сразу перейти к i--
//     }
//     console.log(i);
//     i--
// }

// * 3. do - while
// Сначала сделай, а потом проверь условие
// Первая итерация выполнится в любом случае
// let b = 0; let c = 0
// do {
//     console.log(b);
//     b++;
// } while (b < 0)


// * 4. oo - cycle
// for(;;)

// let run = true;
// while (run) {
//     let answer = prompt('msg');
//     if (answer === 'exit') {
//         // break;
//         run = false;

//         // save
//     }
// }



// * Рефакторинг:

// * i % 2 === 0 ? console.log(i) : null // Лучше, чем нижний способ
// ! console.log(i % 2 === 0 ? i : null) // ! Этот выводит null, хотя он нам не нужен в консоли
// * i % 2 === 0 && console.log(i) // Лучший, когда не нужен else















