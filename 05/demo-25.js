/** JSON.stringify(value, replacer) */

(function () {
    "use strict";

    var user = {
        name: "Вася",
        age: 25,
        window: window
    };

    console.log(JSON.stringify(user, ["name", "age"]));


    var str = JSON.stringify(user, function (key, value) {
        if (key == 'window') return undefined;
        return value;
    });

    console.log(str);


    str = JSON.stringify(user, function (key, value) {
        if (key == 'window') return undefined;
        return value + 500;
    });

    console.log(str);

})();