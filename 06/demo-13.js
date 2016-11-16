/** Конструкция try…catch **/
/** finally и return **/

(function () {

    function func() {
        try {
            return 1;
        } finally {
            alert( 'Вызов завершён' );
        }
    }

    alert( func() ); // сначала finally, потом 1

})();