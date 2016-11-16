/**  ������� � ������� **/
/**  ������ � ������ ��� ���� **/

(function () {

    function CoffeeMachine(power, capacity) { // capacity - ������� ���������
        var waterAmount = 0;

        var WATER_HEAT_CAPACITY = 4200;

        function getTimeToBoil() {
            return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
        }

        // "�����" ��������� ��������
        this.setWaterAmount = function(amount) {
            if (amount < 0) {
                throw new Error("�������� ������ ���� �������������");
            }
            if (amount > capacity) {
                throw new Error("������ ������ ���� ������, ��� " + capacity);
            }

            waterAmount = amount;
        };

        function onReady() {
            alert( '���� �����!' );
        }

        this.run = function() {
            setTimeout(onReady, getTimeToBoil());
        };

    }

    var coffeeMachine = new CoffeeMachine(1000, 500);
    coffeeMachine.setWaterAmount(600); // ���, ������!

})();