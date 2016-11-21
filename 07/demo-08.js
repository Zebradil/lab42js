/** Object.prototype */

(function () {
    "use strict";

    function showList() {
        alert( [].join.call(arguments, " - ") );
    }

    showList("Вася", "Паша", "Маша"); // Вася - Паша - Маша

})();