/** Конструкция try…catch **/
/** Генерация своих ошибок **/

(function () {

    var data = '{ "age": 30 }'; // данные неполны

    try {

        var user = JSON.parse(data); // <-- выполнится без ошибок
        alert( user.name ); // undefined

    } catch (e) {
        // не выполнится
        alert( "Извините, в данных ошибка" );
    }

})();