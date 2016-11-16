/** Конструкция try…catch **/
/** finally и return **/

(function () {

    function func() {

        try {
            // сразу вернуть значение
            return 1;

        } catch (e) {
            /* ... */
        } finally {
            alert( 'finally' );
        }
    }

    alert( func() ); // сначала finally, потом 1

})();