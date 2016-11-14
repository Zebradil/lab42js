(function () {
    "use strict";

    try {

        alert('Начало блока try');  // (1) <--

        // .. код без ошибок

        alert('Конец блока try');   // (2) <--

    } catch (e) {

        alert('Блок catch не получит управление, так как нет ошибок'); // (3)

    }

    alert("Потом код продолжит выполнение...");

})();

(function () {
    "use strict";

    try {

        alert('Начало блока try');  // (1) <--

        lalala; // ошибка, переменная не определена!

        alert('Конец блока try');  // (2)

    } catch (e) {

        alert('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack); // (3) <--

    }

    alert("Потом код продолжит выполнение...");

})();

(function () {
    "use strict";

    try {
        setTimeout(function () {
            throw new Error(); // вылетит в консоль
        }, 1000);
    } catch (e) {
        alert("не сработает");
    }

})();

(function() {
    "use strict";

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