/** ����������� try�catch **/
/** ������ ��� ������ **/

(function () {
    try {

        alert('������ ����� try');  // (1) <--

        lalala; // ������, ���������� �� ����������!

        alert('����� ����� try');  // (2)

    } catch(e) {

        alert('������ ' + e.name + ":" + e.message + "\n" + e.stack); // (3) <--

    }

    alert("����� ��� ��������� ����������...");

})();