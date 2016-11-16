/**  �������������� ������������ **/

(function () {


    function Machine(power) {
        this._enabled = false;

        var self = this;

        this.enable = function() {
            // ���������� ������� ���������� ������ this
            self._enabled = true;
        };

        this.disable = function() {
            self._enabled = false;
        };

    }

    function CoffeeMachine(power) {
        Machine.apply(this, arguments);

        var waterAmount = 0;

        this.setWaterAmount = function(amount) {
            waterAmount = amount;
        };

        var parentEnable = this.enable;
        this.enable = function() {
            parentEnable(); // ������ ����� �������� ��� ������, this �� �����
            this.run();
        }

        function onReady() {
            alert( '���� ������!' );
        }

        this.run = function() {
            setTimeout(onReady, 1000);
        };

    }

    var coffeeMachine = new CoffeeMachine(10000);
    coffeeMachine.setWaterAmount(50);
    coffeeMachine.enable();


})();