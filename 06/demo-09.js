/** Конструкция try…catch **/
/** Оборачивание исключений **/

(function () {

    function ReadError(message, cause) {
        this.message = message;
        this.cause = cause;
        this.name = 'ReadError';
        this.stack = cause.stack;
    }

    function readData() {
        var data = '{ bad data }';

        try {
            // ...
            JSON.parse(data);
            // ...
        } catch (e) {
            // ...
            if (e.name == 'URIError') {
                throw new ReadError("Ошибка в URI", e);
            } else if (e.name == 'SyntaxError') {
                throw new ReadError("Синтаксическая ошибка в данных", e);
            } else {
                throw e; // пробрасываем
            }
        }
    }

    try {
        readData();
    } catch (e) {
        if (e.name == 'ReadError') {
            alert( e.message );
            alert( e.cause ); // оригинальная ошибка-причина
        } else {
            throw e;
        }
    }

})();