

(() => {
    fetch("http://localhost:63342/atw-lamarr-2-13/2.The-Hills/js-complete-course/_shared/api.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (list) {
            var target = document.getElementById("target");
            var input = document.getElementById("hero-id");
            var temp = document.getElementById("tpl-hero");
            var name = temp.content.querySelector("strong");
            var alertEgo = temp.content.querySelector("em");
            var powers = temp.content.querySelector("p");



            document.getElementById("run").addEventListener("click", function () {


                        var i = input.value -1;
                        name.innerHTML = list.heroes[i].name;
                        powers.innerHTML = list.heroes[i].abilities;
                        alertEgo.innerHTML = list.heroes[i].alertEgo;

                        var clone = temp.content.cloneNode(true);
                        target.appendChild(clone);




                    });

        })








})();
