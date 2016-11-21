/** Свои классы на прототипах */
/** класс Animal в функциональном стиле */

(function () {
    "use strict";

    function Animal(name) {
        this.sayHi = function() {
            alert( name );
        };
    }

    var animal = new Animal("Зверь");
    animal.sayHi(); // Зверь

})();