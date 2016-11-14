/** Метод JSON.stringify */

(function () {
    "use strict";
    var event = {
        title: "Конференция",
        date: "сегодня"
    };

    var str = JSON.stringify(event);
    console.log(str);

    // Обратное преобразование.
    console.log(JSON.parse(str));

})();

(function () {
    "use strict";

    var room = {
        number: 23,
        occupy: function () {
            console.log(this.number);
        }
    };

    var event = {
        title: "Конференция",
        date: new Date(Date.UTC(2014, 0, 1)),
        room: room
    };

    console.log(JSON.stringify(event));

})();

(function () {
    "use strict";

    var room = {
        number: 23,
        toJSON: function () {
            return this.number;
        }
    };

    var event = {
        title: "Конференция",
        date: new Date(Date.UTC(2014, 0, 1)),
        room: room
    };

    console.log(JSON.stringify(event));

})();