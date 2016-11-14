/** Метод JSON.parse */

(function () {
    "use strict";

    var numbers = "[0, 1, 2, 3]";
    numbers = JSON.parse(numbers);
    console.log(numbers);


    var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
    user = JSON.parse(user);
    console.log(user.friends);

})();