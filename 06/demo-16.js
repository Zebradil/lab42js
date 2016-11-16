/**  Внутренний и внешний интерфейс **/
/**  Доступ к объекту из внутреннего метода **/

(function () {

    function CoffeeMachine(power) {
        this.waterAmount = 0;

        var WATER_HEAT_CAPACITY = 4200;

        var getBoilTime = function() {
            return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
        }.bind(this);

        function onReady() {
            alert( 'Кофе готово!' );
        }

        this.run = function() {
            setTimeout(onReady, getBoilTime());
        };

    }

    var coffeeMachine = new CoffeeMachine(100000);
    coffeeMachine.waterAmount = 200;

    coffeeMachine.run();

})();