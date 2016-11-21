/** Прототип proto */

(function () {
    "use strict";

    var animal = {
        eats: true
    };
    var rabbit = {
        jumps: true,
        eats: false
    };

    rabbit.__proto__ = animal;

    alert( rabbit.eats ); // false, свойство взято из rabbit

})();