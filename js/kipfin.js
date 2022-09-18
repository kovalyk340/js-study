let a = [];
var correct = new Array("X", "X", "X", "X");
var wrong = new Array("X", " ", " ", "X");

for (let i = 0; i < 5; i++) {
    if (i === 0 || i % 4 === 0) {
        a.push(correct);
    } else {
        a.push(wrong);
    }
}

console.log(a);
