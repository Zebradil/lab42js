/** Умный разбор: JSON.parse(str, reviver) */

(function () {
    "use strict";

    var str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}';
    var event1 = JSON.parse(str);
    console.log(event1.date.getDate());

    var event2 = JSON.parse(str, function (key, value) {
        if (key == 'date') return new Date(value);
        return value;
    });

    console.log(event2.date.getDate());

})();