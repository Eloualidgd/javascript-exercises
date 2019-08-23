/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    document.getElementById("run").addEventListener('click', function () {
        var y = document.getElementById("year").value;
        for (var month = 0; month < 12; month++) {
            var d = new Date(y, month, 13);
            console.log(month);
            x = month + 1;
            if (d.getDay() === 5){
                alert("There is a friday the 13th in the month number " + x + " in the year " + y);
            }
        }
    });

    // your code here

})();
