/** ����������� try�catch **/
/** try..catch �������� ������ � ���������� ���� **/

(function () {

    try {
        setTimeout(function() {
            throw new Error(); // ������� � �������
        }, 1000);
    } catch (e) {
        alert( "�� ���������" );
    }

})();