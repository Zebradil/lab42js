/**  ���������� � ������� ��������� **/
/**  ������ � ������� �� ����������� ������ **/

(function () {

    function CoffeeMachine(power) {
        this.waterAmount = 0;
        var WATER_HEAT_CAPACITY = 4200;

        function getBoilTime() {
            return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
        }

        function onReady() {
            alert( '���� ������!' );
        }

        this.run = function() {
            setTimeout(onReady, getBoilTime.call(this));
        };

    }

// ������ ���������, ��������� 100000W ����� �������� ������
    var coffeeMachine = new CoffeeMachine(100000);
    coffeeMachine.waterAmount = 200;

    coffeeMachine.run();

})();