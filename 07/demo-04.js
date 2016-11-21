/** Свойство constructor */

(function () {
    "use strict";

    function Rabbit() {}

// в Rabbit.prototype есть одно свойство: constructor
    alert( Object.getOwnPropertyNames(Rabbit.prototype) ); // constructor

// оно равно Rabbit
    alert( Rabbit.prototype.constructor == Rabbit ); // true

})();