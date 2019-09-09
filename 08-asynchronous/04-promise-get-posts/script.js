/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click" , function () {
        window.lib.getPosts()
            .then(function (x) {
                console.log(x);

            })

    })
    // llamar a la funcion getPosts , lo que hace getPost es llamar lo que hay en getPost en callbacks y le dams un nombre

})();
