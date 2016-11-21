/** Изменение встроенных прототипов */

(function () {
    "use strict";

    Object.prototype.each = function(f) {

        for (var prop in this) {

            // пропускать свойства из прототипа
            if (!this.hasOwnProperty(prop)) continue;

            var value = this[prop];
            f.call(value, prop, value);

        }

    };

// Теперь все будет в порядке
    var obj = {
        name: 'Вася',
        age: 25
    };

    obj.each(function(prop, val) {
        alert( prop ); // name -> age
    });

})();