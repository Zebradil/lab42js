/**  Функциональное наследование **/

(function () {


    function CoffeeMachine(power) {
        Machine.call(this); // отнаследовать

        var waterAmount = 0;

        this.setWaterAmount = function(amount) {
            waterAmount = amount;
        };

    }

    var coffeeMachine = new CoffeeMachine(10000);

    coffeeMachine.enable();
    coffeeMachine.setWaterAmount(100);
    coffeeMachine.disable();


})();