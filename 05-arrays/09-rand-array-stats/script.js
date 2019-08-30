/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let numbers = [];
    for (let i = 1; i < 11; i++) {
        let randomnr = Math.floor((Math.random() * 100) + 1);
        numbers.push(randomnr);
        let newId = "n" + i; //console.log(numbers);
        document.getElementById("run").addEventListener("click", ).newId.innerHTML = randomnr;
    }
    document.getElementById("min").innerHTML = Math.min(...numbers);
    document.getElementById("max").innerHTML = Math.max(...numbers);
    document.getElementById("sum").innerHTML = numbers.reduce((a, b) => a + b);
    document.getElementById("average").innerHTML = numbers.reduce((a, b) => a + b, 0) / numbers.length

})();

//var uno = document.getElementById("n-1").innerHTML = Math.floor(Math.random() * 100) + 1;
//var dos = document.getElementById("n-2").innerHTML = Math.floor(Math.random() * 100) + 1;
//var tres = document.getElementById("n-3").innerHTML = Math.floor(Math.random() * 100) + 1;
//var cuatro = document.getElementById("n-4").innerHTML = Math.floor(Math.random() * 100) + 1;
//var cinco = document.getElementById("n-5").innerHTML = Math.floor(Math.random() * 100) + 1;
//var seis = document.getElementById("n-6").innerHTML = Math.floor(Math.random() * 100) + 1;
//var siete = document.getElementById("n-7").innerHTML = Math.floor(Math.random() * 100) + 1;
//var ocho = document.getElementById("n-8").innerHTML = Math.floor(Math.random() * 100) + 1;
//var nueve = document.getElementById("n-9").innerHTML = Math.floor(Math.random() * 100) + 1;
//var diez = document.getElementById("n-10").innerHTML = Math.floor(Math.random() * 100) + 1;
//var cars = ["uno", "dos", "tres"];

//var min = document.getElementById("min").innerHTML = Math.cars(1, 100);
