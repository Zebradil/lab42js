/** ����������� try�catch **/
/** ��������� ����� ������ **/

(function () {

    var data = '{ "age": 30 }'; // ������ �������

    try {

        var user = JSON.parse(data); // <-- ���������� ��� ������
        alert( user.name ); // undefined

    } catch (e) {
        // �� ����������
        alert( "��������, � ������ ������" );
    }

})();