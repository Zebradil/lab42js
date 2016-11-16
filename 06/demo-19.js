/**  Геттеры и сеттеры **/
/**  Геттер и сеттер для воды **/

(function () {

    function CoffeeMachine(power, capacity) {
        var waterAmount = 0;

        this.setWaterAmount = function(amount) {
            if (amount < 0) {
                throw new Error("Значение должно быть положительным");
            }
            if (amount > capacity) {
                throw new Error("Нельзя залить воды больше, чем " + capacity);
            }

            waterAmount = amount;
        };

        this.getWaterAmount = function() {
            return waterAmount;
        };
    }

    var coffeeMachine = new CoffeeMachine(1000, 500);
    coffeeMachine.setWaterAmount(450);
    alert( coffeeMachine.getWaterAmount() ); // 450

})();