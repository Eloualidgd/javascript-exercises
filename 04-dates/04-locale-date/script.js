/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    var one = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    var datum = one.toLocaleString("en-GB", options);
        document.getElementById("target").innerHTML= datum ;


    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
