/** 1) Обёртка */

(function () {
    "use strict";

    var user = {
        firstName: "Вася",
        sayHi: function () {
            console.log(this.firstName);
        }
    };

    setTimeout(function () {
        user.sayHi();
    }, 1000);

})();

(function () {
    "use strict";

    var user = {
        firstName: "Вася",
        sayHi: function () {
            console.log(this.firstName);
        }
    };

    setTimeout(function () {
        user.sayHi();
    }, 1000);

})();

(function () {
    "use strict";

    var user = {
        firstName: "Вася",
        sayHi: function () {
            console.log(this.firstName);
        }
    };

    setTimeout(function () {
        user.sayHi();
    }, 1000);

    user = null;

})();