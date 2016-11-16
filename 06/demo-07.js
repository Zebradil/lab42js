/** Конструкция try…catch **/
/** Проброс исключения **/

(function () {

    var data = '{ "name": "Вася", "age": 30 }'; // данные корректны

    try {

        var user = JSON.parse(data);

        if (!user.name) {
            throw new SyntaxError("Ошибка в данных");
        }

        blabla(); // произошла непредусмотренная ошибка

        alert( user.name );

    } catch (e) {

        if (e.name == "SyntaxError") {
            alert( "Извините, в данных ошибка" );
        } else {
            throw e;
        }

    }

})();