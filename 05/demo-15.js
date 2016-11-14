/** Свойство [[Class]] */

(function() {
    "use strict";

    var toString = {}.toString;

    var arr = [1, 2];
    console.log( toString.call(arr) ); // [object Array]

    var date = new Date;
    console.log( toString.call(date) ); // [object Date]

    var user = { name: "Вася" };
    console.log( toString.call(user) ); // [object Object]

    console.log( {}.toString.call(123) ); // [object Number]
    console.log( {}.toString.call("строка") ); // [object String]

})();