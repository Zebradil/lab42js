/** Изменение встроенных прототипов */

(function () {
    "use strict";

    Object.prototype.each = function(f) {
        for (var prop in this) {
            var value = this[prop];
            f.call(value, prop, value); // вызовет f(prop, value), this=value
        }
    }

// Попробуем! (внимание, пока что это работает неверно!)
    var user = {
        name: 'Вася',
        age: 25
    };

    user.each(function(prop, val) {
        alert( prop ); // name -> age -> (!) each
    });

})();