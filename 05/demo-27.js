/** setTimeout & clearTimeout */

(function () {
    "use strict";

    var timerId = setTimeout(function () {
        console.log('Время вышло');
    }, 1000);
    console.log(timerId);

    clearTimeout(timerId);
    console.log(timerId);

})();