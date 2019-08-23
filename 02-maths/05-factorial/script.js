(function () {

    document.getElementById("run").addEventListener("click", function () {


        var num = document.getElementById("number").value;

        function factorialize(num) {
            var result = num;
            if (num === 0 || num === 1)
                return 1;
            while (num > 1) {
                num--;
                result *= num;
            }
            alert(result) ;
            return result;
        }

        factorialize(num);


    });

})();
