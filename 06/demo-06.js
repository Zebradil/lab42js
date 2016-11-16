/** ����������� try�catch **/
/** ��������� ����� ������ **/

(function () {

    var data = '{ "age": 30 }'; // ������ �������

    try {

        var user = JSON.parse(data); // <-- ���������� ��� ������

        if (!user.name) {
            throw new SyntaxError("������ �����������");
        }

        alert( user.name );

    } catch (e) {
        alert( "��������, � ������ ������" );
    }

})();