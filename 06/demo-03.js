/** Конструкция try…catch **/
/** try..catch работает только в синхронном коде **/

(function () {

    try {
        setTimeout(function() {
            throw new Error(); // вылетит в консоль
        }, 1000);
    } catch (e) {
        alert( "не сработает" );
    }

})();