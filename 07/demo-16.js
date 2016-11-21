/** Наследование классов в JavaScript */

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