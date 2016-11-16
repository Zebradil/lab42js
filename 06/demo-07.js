/** ����������� try�catch **/
/** ������� ���������� **/

(function () {

    var data = '{ "name": "����", "age": 30 }'; // ������ ���������

    try {

        var user = JSON.parse(data);

        if (!user.name) {
            throw new SyntaxError("������ � ������");
        }

        blabla(); // ��������� ����������������� ������

        alert( user.name );

    } catch (e) {

        if (e.name == "SyntaxError") {
            alert( "��������, � ������ ������" );
        } else {
            throw e;
        }

    }

})();