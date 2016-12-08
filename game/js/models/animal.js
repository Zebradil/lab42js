"use strict";

function Animal() {

    var x = 0;
    this.speed = 1;
    this.name = 'Нечто';

    this.step = function () {
        x += this.speed;
    };

    this.getPostition = function () {
        return x;
    };

    this.getName = function () {
        return this.name;
    }
}