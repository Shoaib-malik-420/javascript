var physics = parseInt(prompt("enter your physics marks"));
var math = parseInt(prompt("enter your math marks"));
var english = parseInt(prompt("enter your english marks"));
var urdu = parseInt(prompt("enter your urdu marks"));
var language = parseInt(prompt("enter your language marks"));

var totalmarks = physics + math + english + urdu + language;

var percentage = (totalmarks * 100) / 500;
document.write("your result is :" + totalmarks + "<br/>");
document.write("your percentage :" + percentage);

if(percentage >= 80)
{
    document.write("you got A+");
}

else if (percentage >=70)
{
    document.write("you got A");

}

else if (percentage >=60)
{
    document.write("you got B");

}

else if (percentage >=50)
{
    document.write("you got C");

}
else
{
    document.write("crongratulation you are fail" + "<br/>");

}



var Email = prompt("enter your email");
var pswd = parseInt(prompt("enter your password"));

if (Email == "admin@gmail.com" && pswd == 123) {
    document.write("welcome to admin");
    
}


