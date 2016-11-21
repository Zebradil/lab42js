/** Object.prototype */

(function () {
    "use strict";

    var obj = {};

// метод берётся из прототипа?
    alert( obj.toString == Object.prototype.toString ); // true, да

// проверим, правда ли что __proto__ это Object.prototype?
    alert( obj.__proto__ == Object.prototype ); // true

// А есть ли __proto__ у Object.prototype?
    alert( obj.__proto__.__proto__ ); // null, нет

})();