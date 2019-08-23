/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
  //  console.log(fruits.length);
 // console.log (fruits[1]);
    // your code
    var button = document.getElementById("run");

    button.addEventListener( "click", function () {

      fruits[0] = "banana";
      fruits[9] = "kiwi";
      alert(fruits);





    })


})();
