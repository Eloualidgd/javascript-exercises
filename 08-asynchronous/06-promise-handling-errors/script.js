/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", function () {

        window.lib.getPersons()
            .then(function (art) {
                console.log(art);
                //llama a getpersons desde callback , entonces del mismo callback "fijate en next de arriba y de abajo de callback" coge los nombres y tal de util.js

                 }
            )
            .catch(function (errorrrrr) {
                console.log(errorrrrr.message);





            });


            
        });
        
    
    
})();
