/** ����������� try�catch **/

(function () {

    var data = "Has Error"; // � ������ ������

    try {

        var user = JSON.parse(data); // <-- ������ ��� ����������
        alert( user.name ); // �� ���������

    } catch (e) {
        // ...���������� catch
        alert( "��������, � ������ ������, �� ��������� �������� �� ��� ���" );
        alert( e.name );
        alert( e.message );
    }

})();