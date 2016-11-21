/** Object.prototype */

(function () {
    "use strict";

    function showList() {
        alert( Array.prototype.join.call(arguments, " - ") );
    }

    showList("Вася", "Паша", "Маша"); // Вася - Паша - Маша

})();