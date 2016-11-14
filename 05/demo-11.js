/** Карринг (currying) */

(function () {
    "use strict";

    function mul(a, b) {
        return a * b;
    }

    var double = mul.bind(null, 2); // контекст фиксируем null, он не используется

    console.log(double(3));
    console.log(double(4));
    console.log(double(5));

})();