/** Проверка класса: "instanceof" */

(function () {
    "use strict";

    // Создаём объект rabbit, как обычно
    function Rabbit() {}
    var rabbit = new Rabbit();

// изменили prototype...
    Rabbit.prototype = {};

// ...instanceof перестал работать!
    alert( rabbit instanceof Rabbit ); // false

})();