// COLLEGO GLI ELEMENTI JAVASCRIPT ALL'HTML.
let container = document.getElementById('main_content');

// HO CREATO UN CICLO DI NUMERI DA 1 A 100.
for (let i = 1; i < 101; i++) {

    // HO INSERITO IL CONSOLE-LOG PER CONTROLLARE CHE IL CICLO DI NUMERI FUNZIONASSE CORRETTAMENTE.
    console.log(i);

    // HO CREATO I DIV CONTENITORI PER INSERIRE DENTRO NUMERI E SCRITTE.
    const square = document.createElement('div');
    container.append(square);
    square.classList.add('square-content');

    // HO INSERITO LA SCRITTA "FIZZBUZZ" SU OGNI MULTIPLO DI 15.
    if (i % 15 === 0) {
        square.classList.add('fizz-buzz-box');
        square.append('fizzbuzz')

    // HO INSERITO LA SCRITTA "FIZ" SU OGNI MULTIPLO DI 3.
    } else if (i % 3 === 0) {
        square.classList.add('fizz-box');
        square.append('fizz')

    // HO INSERITO LA SCRITTA "BUZZ" PER OGNI MULTIPLO DI 5.
    } else if (i % 5 === 0) {
        square.classList.add('buzz-box');
        square.append('buzz')

    // HO INSERITO I NUMERI NEI CONTENITORI VUOTI.
    } else {
        square.append(i);
    }
}

// FINE