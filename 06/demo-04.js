/** Конструкция try…catch **/

(function () {

    var data = "Has Error"; // в данных ошибка

    try {

        var user = JSON.parse(data); // <-- ошибка при выполнении
        alert( user.name ); // не сработает

    } catch (e) {
        // ...выполнится catch
        alert( "Извините, в данных ошибка, мы попробуем получить их ещё раз" );
        alert( e.name );
        alert( e.message );
    }

})();