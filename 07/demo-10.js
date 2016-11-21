/** Примитивы */

(function () {
    "use strict";

    var zero = new Number(0);

    if (zero) { // объект - true, так что alert выполнится
        alert( "число ноль -- true?!?" );
    }

})();