

(function() {

    var tar = document.getElementById("target");
    var wave = "Woo-hoo! I'm making waves! Wéééé! Oh ... I think I'm having seasickness ... "
    var pos = 0 ;
    tar.innerHTML = "";

    for (var i=0 ; i<wave.length ; i ++){
        pos++;


        var char = wave.charAt(i);
            if (pos === 1){
                char = "<span class='1'>" + char + "</span>"
            }
            if (pos === 2 || pos === 8) {
                char = "<span class = '2'>" + char + "</span>"
            }
            if (pos === 3 || pos === 7) {
                char = "<span class = '3'>" + char + "</span>"
            }
            if (pos === 4 || pos === 6) {
                char = "<span class = '4'>" + char + "</span>"
            }
            if (pos === 5) {
                char = "<span class = '5'>" + char + "</span>"

            }
            if (pos === 8){
                pos = 0 ;
            }
            tar.innerHTML += char ;
    }
    var first = document.getElementsByClassName('1');
    for (var n = 0; n < first.length; n++) {
        first[n].style.fontSize = "0.5em";
    }

    var second = document.getElementsByClassName('2');
    for (var n = 0; n < second.length; n++) {
        second[n].style.fontSize = "1em";
    }
    var tres = document.getElementsByClassName('3');
    for (var n = 0; n < tres.length; n++) {
        tres[n].style.fontSize = "1.5em";
    }
    var cuatro = document.getElementsByClassName('4');
    for (var n = 0; n < cuatro.length; n++) {
        cuatro[n].style.fontSize = "2em";
    }
    var cinco = document.getElementsByClassName('5');
    for (var n = 0; n < cinco.length; n++) {
        cinco[n].style.fontSize = "2.5em";
    }




})();
