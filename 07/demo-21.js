/** Проверка класса: "instanceof" */

(function () {
    "use strict";

    var eventMixin = {

        /**
         * Подписка на событие
         * Использование:
         *  menu.on('select', function(item) { ... }
         */
        on: function (eventName, handler) {
            if (!this._eventHandlers) this._eventHandlers = {};
            if (!this._eventHandlers[eventName]) {
                this._eventHandlers[eventName] = [];
            }
            this._eventHandlers[eventName].push(handler);
        },

        /**
         * Прекращение подписки
         *  menu.off('select',  handler)
         */
        off: function (eventName, handler) {
            var handlers = this._eventHandlers && this._eventHandlers[eventName];
            if (!handlers) return;
            for (var i = 0; i < handlers.length; i++) {
                if (handlers[i] == handler) {
                    handlers.splice(i--, 1);
                }
            }
        },

        /**
         * Генерация события с передачей данных
         *  this.trigger('select', item);
         */
        trigger: function (eventName /*, ... */) {

            if (!this._eventHandlers || !this._eventHandlers[eventName]) {
                return; // обработчиков для события нет
            }

            // вызвать обработчики
            var handlers = this._eventHandlers[eventName];
            for (var i = 0; i < handlers.length; i++) {
                handlers[i].apply(this, [].slice.call(arguments, 1));
            }

        }
    };

    // Класс Menu с примесью eventMixin
    function Menu() {
        // ...
    }

    for (var key in eventMixin) {
        Menu.prototype[key] = eventMixin[key];
    }

    // Генерирует событие select при выборе значения
    Menu.prototype.choose = function (value) {
        this.trigger("select", value);
    }

    // Создадим меню
    var menu = new Menu();

    // При наступлении события select вызвать эту функцию
    menu.on("select", function (value) {
        console.log("Выбрано значение " + value);
    });

    // Запускаем выбор (событие select вызовет обработчики)
    menu.choose("123");

})();