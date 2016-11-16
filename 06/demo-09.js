/** ����������� try�catch **/
/** ������������ ���������� **/

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
                throw new ReadError("������ � URI", e);
            } else if (e.name == 'SyntaxError') {
                throw new ReadError("�������������� ������ � ������", e);
            } else {
                throw e; // ������������
            }
        }
    }

    try {
        readData();
    } catch (e) {
        if (e.name == 'ReadError') {
            alert( e.message );
            alert( e.cause ); // ������������ ������-�������
        } else {
            throw e;
        }
    }

})();