(() => {
    fetch("http://localhost:63342/atw-lamarr-2-13/2.The-Hills/js-complete-course/_shared/api.json")

        .then(function (response) {
            return response.json();
        })

        .then(function (list) {

            var target = document.getElementById("target");
            var temp = document.getElementById("tpl-hero");

            var name = temp.content.querySelector("strong");
            var alterego = temp.content.querySelector("em");
            var power = temp.content.querySelector("p");

            document.getElementById("run").addEventListener("click", function() {

                for (var i = 0; i < list.heroes.length; i++){

                    name.innerHTML = list.heroes[i].name;

                    alterego.innerHTML = list.heroes[i].alterEgo;

                    var powerstext ="";

                    for (var c =0; c < list.heroes[i].abilities.length; c++){

                        powerstext += list.heroes[i].abilities[c];
                    }

                    power.innerHTML = powerstext;

                    target.appendChild(temp.content.cloneNode(true));





                }






            });











        });

})();
