


(() => {

    fetch("http://localhost:63342/atw-lamarr-2-13/2.The-Hills/js-complete-course/_shared/api.json")

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            document.getElementById("run").addEventListener("click", function () {


                var id = document.getElementById("hero-id").value;
                console.log(data.heroes.splice(data.heroes.findIndex(antw => antw.id == id),1));
                console.log(data.heroes);


                //borrar un heroe de la lista cada vez que lo seleccione en el browser con el numero de su id

            });

        })





            })();
