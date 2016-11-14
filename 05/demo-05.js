/** Потеря контекста */

setTimeout(function () {
    console.log("Привет");
}, 1000);

(function () {
    "use strict";

    var user = {
        firstName: "Вася",
        sayHi: function () {
            console.log(this.firstName);
        }
    };

    setTimeout(user.sayHi, 1000);

})();