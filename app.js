// COLLEGO GLI ELEMENTI JS ALL'HTML

let container = document.getElementById('main_content');

// HO CREATO UN CICLO DI NUMERI DA 1 A 100

for (let i = 1; i < 101; i++) {
    console.log(i);

    const square = document.createElement('div');
    container.append(square);
    square.classList.add('square-content');

    if (i % 3 === 0) {
        square.classList.add('fizz-box');
        square.append('fizz')
    } else if (i % 5 === 0) {
        square.classList.add('buzz-box');
        square.append('buzz')
    }
}