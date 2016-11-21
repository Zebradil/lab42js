/** Свойство constructor */

(function () {
    "use strict";

    function Rabbit(name) {
        this.name = name;
        alert( name );
    }

    var rabbit = new Rabbit("Кроль");

    var rabbit2 = new rabbit.constructor("Крольчиха");

})();