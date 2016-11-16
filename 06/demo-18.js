/**  Геттеры и сеттеры **/
/**  Геттер и сеттер для воды **/

(function () {

    function CoffeeMachine(power, capacity) { // capacity - ёмкость кофеварки
        var waterAmount = 0;

        var WATER_HEAT_CAPACITY = 4200;

        function getTimeToBoil() {
            return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
        }

        // "умная" установка свойства
        this.setWaterAmount = function(amount) {
            if (amount < 0) {
                throw new Error("Значение должно быть положительным");
            }
            if (amount > capacity) {
                throw new Error("Нельзя залить воды больше, чем " + capacity);
            }

            waterAmount = amount;
        };

        function onReady() {
            alert( 'Кофе готов!' );
        }

        this.run = function() {
            setTimeout(onReady, getTimeToBoil());
        };

    }

    var coffeeMachine = new CoffeeMachine(1000, 500);
    coffeeMachine.setWaterAmount(600); // упс, ошибка!

})();