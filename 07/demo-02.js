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
        alert( key + " = " + rabbit[key] ); // выводит и "eats" и "jumps"
    }

})();