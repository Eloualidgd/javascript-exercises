/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const verschillende_colors= 16777216;
    document.getElementById("run").addEventListener("click", function(){
      function colors() {
          return ("#"+ Math.floor(Math.random() *verschillende_colors).toString(16))
         // return "red"

      }
        document.body.style.backgroundColor = colors()
    })

    // your code here

})();
