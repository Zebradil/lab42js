var x = 5;
eval(" alert( x ); x = 10"); // 5, доступ к старому значению
console.log(x); // 10, значение изменено внутри eval


(function () {
    "use strict";
    eval("var a = 5; function f() { }");
    console.log(a); // ошибка, переменная не определена
    // функция f тоже не видна снаружи
})();