(function() {
    /*
    var min = document.getElementById('slider').getAttribute('min').valueOf();
    var max = document.getElementById('slider').getAttribute('max').valueOf();
    console.log(max);

    */
    var slider = document.getElementById("slider");
    var output = document.getElementById("target");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    }

})();