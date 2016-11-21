/** Свои классы на прототипах */
/** класс Animal в функциональном стиле */

(function () {
    "use strict";

    function Animal(name) {
        this._name = name;
    }

    Animal.prototype.sayHi = function() {
        alert( this._name );
    }

    var animal = new Animal("Зверь");
    animal.sayHi(); // Зверь

})();