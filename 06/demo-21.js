/**  Функциональное наследование **/

(function () {


    function Machine() {
        this._enabled = false; // вместо var enabled

        this.enable = function() {
            this._enabled = true;
        };

        this.disable = function() {
            this._enabled = false;
        };
    }

    function CoffeeMachine(power) {
        Machine.call(this);

        this.enable();

        alert( this._enabled ); // true
    }

    var coffeeMachine = new CoffeeMachine(10000);


})();