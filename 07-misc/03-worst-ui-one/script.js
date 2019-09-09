(function() {



    var slider = document.getElementById("slider");
    var output = document.getElementById("target");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    }



})();

