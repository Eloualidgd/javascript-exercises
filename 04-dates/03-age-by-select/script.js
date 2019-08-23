/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener('click', checkAge);

    function checkAge() {
        console.log("test");
        var day = document.getElementById("dob-day").value;
        var month = document.getElementById("dob-month").value;
        var year = document.getElementById("dob-year").value;
        console.log(day+" "+ month +" "+ year);


        var date = new Date();
        console.log(date);
        var presentyear = date.getFullYear();
        console.log(presentyear);

        var calculation = presentyear - year;
        console.log(calculation);
        alert(calculation);






    }



    // your code here

})();
