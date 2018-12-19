/**
 * @name hello.node
 * @desc Juste pour les algorithmes
 * @author Aélion - Déc. 2018
 * @version 1.0.0
 */
const myFunction = require('./functions.js');



/**
 * @var array
 * Tableau de nombres entiers
 */
const tablo = [25, 50, 256, 312, 3, 22, 8];

/**
 * @var number
 * Valeur maximum du tableau
 */
let maxIs = tablo[0];

/**
 * @var number
 * Valeur minimum du tableau
 */
let minIs = tablo[0];

/**
 * @var number
 * Cumul des valeurs du tableau
 */
let total = 0;
// Boucle de parcours du tableau
for (let i = 0; i < tablo.length; i++) {

    // Cumul du total
    total = total + tablo[i];

    // Si l'indice est supérieur à 0, contrôler la valeur maximum
    if (i > 0) {
        maxIs = myFunction.minOrMax(maxIs, tablo[i]);
        minIs = myFunction.minOrMax(minIs, tablo[i], false);
    }

    if ( tablo[i] % 2 == 0) {
        console.log('Indice ' + i + ' est pair ' + tablo[i]);
    } else {
        console.log(tablo[i] + ' est impair');
    }
}

// Fin de parcours du tableau
console.log('Valeur maximum : ' + maxIs + ' Minimum : ' + minIs + ' Total : ' + total);

// Tri à bulle
let iteration = tablo.length;
let begin = 0;
while (iteration > 0) {
    for (let i = begin; i < tablo.length; i++) {
        let currentValue = tablo[i];
        let nextValue = tablo[i + 1];

        if (currentValue > nextValue) {
            // Swap les colonnes du tableau
            tablo[i] = nextValue;
            tablo[i + 1] = currentValue;
        }
    }
    iteration--;
}
console.log(tablo);
