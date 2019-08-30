/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var target = document.getElementById("target");
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");

    console.log(target);
    for (var i = 0; i<10 ; i++){
        var trr = document.createElement("tr");
        tbody.appendChild(trr);
        for (var j = 0; j<1 ; j++){
            var tdd = document.createElement("td");
            trr.appendChild(tdd);
        }
    }

    table.appendChild(tbody);
    target.appendChild(table);

})();






















