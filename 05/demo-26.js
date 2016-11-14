/** JSON.stringify(value, replacer, space) */

(function () {
    "use strict";

    var user = {
        name: "Вася",
        age: 25,
        roles: {
            isAdmin: false,
            isEditor: true
        }
    };

    var str = JSON.stringify(user, "", 4);

    console.log(str);

})();