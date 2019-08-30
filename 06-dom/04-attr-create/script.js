/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // we need to take date of img
    let getId = document.getElementById("source");
    let getAttr = getId.getAttribute("data-image");
    // console.log(getAttr);
let newImg = document.createElement("img");
     newImg.setAttribute("src",getAttr );
     console.log(newImg);
   document.getElementById("target").appendChild(newImg);
   getId.remove();
})();
