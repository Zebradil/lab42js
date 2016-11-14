/** Утиная типизация */

(function () {
    "use strict";

    function sayHi(who) {
        if (Array.isArray(who)) {
            who.forEach(sayHi);
        } else {
            console.log('Привет, ' + who);
        }
    }

    // Вызов с примитивным аргументом
    sayHi("Вася");

    // Вызов с массивом
    sayHi(["Саша", "Петя"]);

    // Вызов с вложенными массивами - тоже работает!
    sayHi(["Саша", "Петя", ["Маша", "Юля"]]);

})();

(function () {
    "use strict";

    function sayHi(who) {
        if (who.forEach) { // ← Весь смак тут!
            who.forEach(sayHi);
        } else {
            console.log('Привет, ' + who);
        }
    }

    // Вызов с примитивным аргументом
    sayHi("Вася");

    var duck = {
        forEach: function (fn) {
            ["Саша", "Петя"].forEach(function (name) {
                fn(name + '!');
            })
        }
    };

    // Вызов с уткой
    sayHi(duck);

    // Вызов с вложенными массивами - тоже работает!
    sayHi(["Саша", "Петя", ["Маша", "Юля"]]);

})();