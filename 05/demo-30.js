(function () {
    "use strict";

    var previousTime = performance.now();
    var res;

    function inhibitor() {
        var i = 10000000;
        while (i) {
            res = --i;
        }
    }

    // начать повторы с интервалом 2 сек
    var timerId = setInterval(function () {
        var now = performance.now();
        console.log(now - previousTime);
        inhibitor();
        previousTime = now;
    }, 100);

    // через 5 сек остановить повторы
    setTimeout(function () {
        clearInterval(timerId);
        console.log('стоп');
    }, 1000);

})();

(function () {
    "use strict";

    var previousTime = performance.now();
    var res;

    function inhibitor() {
        var i = 10000000;
        while (i) {
            res = --i;
        }
    }

    function f() {
        var now = performance.now();
        console.log(now - previousTime);
        inhibitor();
        previousTime = now;
        timerId = setTimeout(f, 100);
    }

    // начать повторы с интервалом 2 сек
    var timerId = setTimeout(f, 100);

    // через 5 сек остановить повторы
    setTimeout(function () {
        clearTimeout(timerId);
        console.log('стоп');
    }, 1000);

})();
