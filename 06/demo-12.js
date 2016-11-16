/** ����������� try�catch **/
/** finally � return **/

(function () {

    function func() {

        try {
            // ����� ������� ��������
            return 1;

        } catch (e) {
            /* ... */
        } finally {
            alert( 'finally' );
        }
    }

    alert( func() ); // ������� finally, ����� 1

})();