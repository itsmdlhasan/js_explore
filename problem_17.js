/* একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।  */

function multiplicationTable() {
    for (var i = 1; i <= 10; i++) {
        console.log('13 x', i, '=', (13 * i));
    }
}
multiplicationTable(13);