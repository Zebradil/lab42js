/** Метод call */

(function () {
    "use strict";

    var user = {
        firstName: "Василий",
        surname: "Петров",
        patronym: "Иванович"
    };

    function showFullName(firstPart, lastPart) {
        console.log(this[firstPart] + " " + this[lastPart]);
    }

    showFullName.call(user, 'firstName', 'surname'); // "Василий Петров"
    showFullName.call(user, 'firstName', 'patronym'); // "Василий Иванович"

})();