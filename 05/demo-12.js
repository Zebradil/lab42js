/** Декораторы */

(function () {
    "use strict";

    var timers = {};

    // прибавит время выполнения f к таймеру timers[timer]
    function timingDecorator(f, timer) {
        return function () {
            var start = performance.now();

            var result = f.apply(this, arguments); // (*)

            if (!timers[timer]) timers[timer] = 0;
            timers[timer] += performance.now() - start;

            return result;
        }
    }

    // функция может быть произвольной, например такой:
    var fibonacci = function f(n) {
        return (n > 2) ? f(n - 1) + f(n - 2) : 1;
    };


    // использование: завернём fibonacci в декоратор
    fibonacci = timingDecorator(fibonacci, "fibo");

    // неоднократные вызовы...
    console.log(fibonacci(10)); // 55
    console.log(fibonacci(20)); // 6765
    // ...

    // в любой момент можно получить общее количество времени на вызовы
    console.log(timers.fibo + 'мс');

})();

(function () {
    "use strict";
    // вспомогательная функция для проверки на число
    function checkNumber(value) {
        return typeof value == 'number';
    }

    // декоратор, проверяющий типы для f
    // второй аргумент checks - массив с функциями для проверки
    function typeCheck(f, checks) {
        return function () {
            for (var i = 0; i < arguments.length; i++) {
                if (!checks[i](arguments[i])) {
                    console.log("Некорректный тип аргумента номер " + i);
                    return;
                }
            }
            return f.apply(this, arguments);
        }
    }

    function sum(a, b) {
        return a + b;
    }

    // обернём декоратор для проверки
    sum = typeCheck(sum, [checkNumber, checkNumber]); // оба аргумента - числа

    // пользуемся функцией как обычно
    console.log(sum(1, 2)); // 3, все хорошо

    // а вот так - будет ошибка
    sum(true, null); // некорректный аргумент номер 0
    sum(1, ["array", "in", "sum?!?"]); // некорректный аргумент номер 1

})();