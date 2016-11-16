/**  Внутренний и внешний интерфейс **/
/**  Доступ к объекту из внутреннего метода **/

(function () {

    function CoffeeMachine(power) {
        this.waterAmount = 0;
        var WATER_HEAT_CAPACITY = 4200;

        function getBoilTime() {
            return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
        }

        function onReady() {
            alert( 'Кофе готово!' );
        }

        this.run = function() {
            setTimeout(onReady, getBoilTime.call(this));
        };

    }

// создаю кофеварку, мощностью 100000W чтобы кипятила быстро
    var coffeeMachine = new CoffeeMachine(100000);
    coffeeMachine.waterAmount = 200;

    coffeeMachine.run();

})();