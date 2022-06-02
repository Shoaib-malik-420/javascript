function adddata(){
        var txtboxvalue = document.getElementById("username").value;

        var list = document.getElementById("drop");

        var creatli = document.createElement("option");

        var data = document.createTextNode(txtboxvalue);

        creatli.appendChild(data);

        list.insertBefore(creatli,list.firstChild);

        document.getElementById("username").value = "";

        
}