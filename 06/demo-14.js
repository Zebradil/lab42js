/**  Внутренний и внешний интерфейс **/
(function () {

    function CoffeeMachine(power) {

        this.waterAmount = 0;

        // физическая константа - удельная теплоёмкость воды для getBoilTime
        var WATER_HEAT_CAPACITY = 4200;

        // расчёт времени для кипячения
        function getBoilTime() {
            return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power; // ошибка!
        }

        // что делать по окончании процесса
        function onReady() {
            alert( 'Кофе готово!' );
        }

        this.run = function() {
            setTimeout(onReady, getBoilTime());
        };

    }

    var coffeeMachine = new CoffeeMachine(1000);
    coffeeMachine.waterAmount = 200;

    coffeeMachine.run();

})();