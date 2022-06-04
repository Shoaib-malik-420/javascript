function find(){
    var P = parseInt( document.getElementById("Amount").value);
    var R = parseFloat( document.getElementById("Rate").value);
    var T = parseInt( document.getElementById("Time").value);

    var I = P * (1 + (R * T));
 document.getElementById("Result").value=I;
}