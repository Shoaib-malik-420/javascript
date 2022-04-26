document.write("loan service for people");
var age = parseInt(prompt("enter your age"));
var gender = prompt("enter your gender");
var assets = parseInt(prompt("enter your assets"));

if ((age >=16 && age <=25) && (gender == "male") && (assets > 2000) ){
    document.write("you are eligible for loan of RS.1 lac");
}
else if ((age >=16 && age <=22) && (gender == "female") && (assets > 2000)){
    document.write("you are eligible for loan of RS.50000");
}

else if ((age >=25 && age <=30) && (gender == "male") && (assets > 5000)){
    document.write("you are eligible for loan of RS.250000");
}

else if ((age >=23 && age <=30) && (gender == "female") && (assets > 4000)){
    document.write("you are eligible for loan of RS.200000");
}
else{
    document.write("you are not eligible for loan");

}


