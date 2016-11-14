/** Одалживание метода */

(function () {
    "use strict";

    function printArgs() {
        arguments.join = [].join;

        var argStr = arguments.join(':');

        console.log(argStr);
    }

    printArgs(1, 2, 3);

})();

(function () {
    "use strict";

    var obj = {
        0: "А",
        1: "Б",
        2: "В",
        length: 3
    };

    obj.join = [].join;
    console.log(obj.join(';'));

})();

(function () {
    "use strict";

    var obj = {
        0: "А",
        1: "Б",
        2: "В",
        length: 3,
        join: true
    };

    console.log(obj); // ← 1

    obj.join = [].join;
    console.log(obj.join(';'));

    console.log(obj); // ← 2

})();