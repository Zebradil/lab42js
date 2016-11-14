/** setInterval & clearInterval */

(function () {
    "use strict";

    // начать повторы с интервалом 2 сек
    var timerId = setInterval(function () {
        alert("тик");
    }, 2000);

    // через 5 сек остановить повторы
    setTimeout(function () {
        clearInterval(timerId);
        alert('стоп');
    }, 5000);

})();