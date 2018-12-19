/**
 * Retourne la valeur maximum entre deux valeurs
 * private int max(int currentMax, int value)
 * @param {*} currentValue Valeur maximum courante
 * @param {*} value Valeur lue dans le tableau
 * @return number La valeur la plus élevée entre currentValue et value
 */
function max(currentMax, value) {
    console.log('Compare : ' + currentMax + ' à ' + value);
    if (value > currentMax) {
        return value;
    }

    return currentMax;
}

/**
 * Retourne la valeur minimum entre deux valeurs
 * private int min(int currentMin, int value)
 * @param {*} currentMin 
 * @param {*} value 
 * @return number Valeur minimum
 */
function min(currentMin, value) {
   if (value < currentMin) {
       return value;
   }

   return currentMin;
}

/**
 * Wrapper pour les fonctions min et max
 * public int minOrMax(int current, int value, boolean wantMax = false)
 * @param {*} current 
 * @param {*} value 
 * @param {*} wantMax 
 */
exports.minOrMax = function (current, value, wantMax = true) {
   if (wantMax) {
       return max(current, value);
   }
   return min(current, value);
}