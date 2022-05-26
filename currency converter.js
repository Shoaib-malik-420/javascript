function Convert(){
    var currency = parseFloat(document.getElementById("input currency").value);
    var Unit = document.getElementById("units").value;

    if(Unit == "Dollor"){
        var Answer = currency * 202.38
        document.getElementById("Result").value = Answer + " Dollar"
    }

    else if(Unit == "Dirham"){
        var Answer = currency * 55.10
        document.getElementById("Result").value = Answer + " Dirham"
    }

    else if(Unit == "Taka"){
        var Answer = currency * 2.30
        document.getElementById("Result").value = Answer + " Taka"
    }

    else if(Unit == "Euro"){
        var Answer = currency * 216.74
        document.getElementById("Result").value = Answer + " Euro"
    }

    else if(Unit == "Riyal"){
        var Answer = currency * 53.95
        document.getElementById("Result").value = Answer + " Riyal"
    }

    else if(Unit == "Dinnar"){
        var Answer = currency * 661.79
        document.getElementById("Result").value = Answer + " Dinnar"
    }

    else if(Unit == "Pound"){
        var Answer = currency * 254.34
        document.getElementById("Result").value = Answer + " Pound"
    }

    else if(Unit == "Indian Rs"){
        var Answer = currency * 2.61
        document.getElementById("Result").value = Answer + " Indian Rs"
    }


}