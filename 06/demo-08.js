/** ����������� try�catch **/
/** ������� ���������� **/

(function () {

    function readData() {
        var data = '{ "name": "����", "age": 30 }';

        try {
            // ...
            blabla(); // ������!
        } catch (e) {
            // ...
            if (e.name != 'SyntaxError') {
                throw e; // ������������
            }
        }
    }

    try {
        readData();
    } catch (e) {
        alert( "������ �� ������� catch: " + e ); // �����
    }

})();