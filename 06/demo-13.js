/** ����������� try�catch **/
/** finally � return **/

(function () {

    function func() {
        try {
            return 1;
        } finally {
            alert( '����� ��������' );
        }
    }

    alert( func() ); // ������� finally, ����� 1

})();