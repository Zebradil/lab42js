/** ����������� try�catch **/
/** ������ finally **/

(function () {

    try {
        alert( 'try' );
        if (confirm('������������� ������?')) BAD_CODE();
    } catch (e) {
        alert( 'catch' );
    } finally {
        alert( 'finally' );
    }

})();