/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var a = new Date();
    var b = a.getHours();
    var c = a.getMinutes();


    var target = document.getElementById("target");

    if (b < 17) {
        target.innerHTML = "Hello!";
    } else if ( b === 17 && c <= 30) {
        target.innerHTML = "Hello!";
    } else {
        target.innerHTML = "Good Night!";
    }

    //target.innerHTML = "Test";


    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
