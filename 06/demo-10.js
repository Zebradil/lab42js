/** Конструкция try…catch **/
/** Секция finally **/

(function () {

    try {
        alert( 'try' );
        if (confirm('Сгенерировать ошибку?')) BAD_CODE();
    } catch (e) {
        alert( 'catch' );
    } finally {
        alert( 'finally' );
    }

})();