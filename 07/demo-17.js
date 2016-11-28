/** Проверка класса: "instanceof" */

(function () {
    "use strict";

    function Rabbit() {}

// создаём объект
    var rabbit = new Rabbit();

// проверяем -- этот объект создан Rabbit?
    console.log( rabbit instanceof Rabbit ); // true, верно

})();