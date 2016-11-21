/** Свои классы на прототипах */
/** класс Animal в функциональном стиле */

(function () {
    "use strict";

    function Animal(name) {
        this.speed = 0;
        this.name = name;

        this.run = function(speed) {
            this.speed += speed;
            alert( this.name + ' бежит, скорость ' + this.speed );
        };

        this.stop = function() {
            this.speed = 0;
            alert( this.name + ' стоит' );
        };
    };

    var animal = new Animal('Зверь');

    alert( animal.speed ); // 0, начальная скорость
    animal.run(3); // Зверь бежит, скорость 3
    animal.run(10); // Зверь бежит, скорость 13
    animal.stop(); // Зверь стоит

})();