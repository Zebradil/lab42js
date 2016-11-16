/** Конструкция try…catch **/
/** Генерация своих ошибок **/

(function () {

    var data = '{ "age": 30 }'; // данные неполны

    try {

        var user = JSON.parse(data); // <-- выполнится без ошибок

        if (!user.name) {
            throw new SyntaxError("Данные некорректны");
        }

        alert( user.name );

    } catch (e) {
        alert( "Извините, в данных ошибка" );
    }

})();