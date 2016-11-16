/** ����������� try�catch **/
/** ������ finally **/

(function () {

    function sum(n) {
        return n ? (n + sum(n - 1)) : 0;
    }

    var n = +prompt('������� n?', 100);

    var start = new Date();

    try {
        var result = sum(n);
    } catch (e) {
        result = 0;
    } finally {
        var diff = new Date() - start;
    }

    alert( result ? result : '���� ������' );
    alert( "���������� ������ " + diff );

})();