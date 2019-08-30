

(function () {

    const text = "Eloualid Eloualid Eloualid Eloualid Eloualid Eloualid Eloualid Eloualid";
    let i = 0;
    let speed = 50;
    document.getElementById("target").innerHTML = "";
     /* The speed/duration of the effect in milliseconds */

    function typewriter() {
        if ( i < text.length  ){

            document.getElementById("target").innerHTML += text.charAt(i);
            i++;
            setTimeout(typewriter, speed);
        }

    }

typewriter();

})();