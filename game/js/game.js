"use strict";

function Rabbit() {
    Animal.apply(this, arguments);

    this.speed = 10;
    this.name = 'Кролик';
}

function Snake() {
    Animal.apply(this, arguments);

    this.speed = 9;
    this.name = 'Змея';
}

function Turtle() {
    Animal.apply(this, arguments);

    this.speed = 2;
    this.name = 'Черепаха';
}

function Game() {

    var trackLength = 20;

    this.isAllFinished = function () {

        var animals = this.animals;

        // Бизнес-логика
        for (var i = 0; i < animals.length; i++) {
            var animal = animals[i];
            if (animal.getPostition() < trackLength) {
                return false;
            }
        }

        return true;
    };

    this.run = function () {

        this.animals = [
            new Rabbit(),
            new Snake(),
            new Turtle()
        ];

        while (true) {

            this.doStuff();
            this.render();

            if (this.isAllFinished()) {
                console.log('ALL FINISHED!');
                break;
            }
        }

    };


    this.doStuff = function () {

        var animals = this.animals;

        // Бизнес-логика
        for (var i = 0; i < animals.length; i++) {
            var animal = animals[i];
            animal.step();
        }
    };


    this.render = function () {
        console.log('--------------------------------');

        var animals = this.animals;

        // Отображение
        for (var i = 0; i < animals.length; i++) {
            var animal = animals[i];
            console.log(animal.getName() + ': ' + animal.getPostition());
        }

    };

}

(function () {
    "use strict";

    (new Game()).run();
})();


/*

 Сущности

 + животные, которые наследуются от общего класса
 - трасса
 - движок
 - игрок
 */