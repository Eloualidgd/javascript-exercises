(function() {
    var validity = document.getElementById("validity");

    document.getElementById("pass-one").addEventListener("input", function () {
        var input = document.getElementById("pass-one").value;

        var counter = 0;

        for(var i =0; i < input.length; i++){
            var check = input.charAt(i);

            if (!isNaN(check)){
                counter++;
            }
        }


        if (input.length >= 8 && counter >= 2){
            validity.innerHTML = "ok"
        }
        else {
            validity.innerHTML = "not ok"
        }

    })

// your code here

})();
