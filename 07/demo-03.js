/** Метод hasOwnProperty */

(function () {
    "use strict";

    var animal = {
        eats: true
    };

    var rabbit = {
        jumps: true,
        __proto__: animal
    };

    for (var key in rabbit) {
        if (!rabbit.hasOwnProperty(key)) continue; // пропустить "не свои" свойства
        alert( key + " = " + rabbit[key] ); // выводит только "jumps"
    }

})();