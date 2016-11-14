/** 3) Встроенный bind */

(function () {
    "use strict";

    var user = {
        firstName: "Вася",
        sayHi: function () {
            console.log(this.firstName);
        }
    };

    setTimeout(user.sayHi.bind(user), 1000);

})();