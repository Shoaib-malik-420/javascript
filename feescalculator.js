var no_of_course = parseInt(prompt("enter your course"));
var coursefees = 0;
var totalfees = 0;
if (no_of_course >= 3 && no_of_course <7) {
    coursefees = 18000 * no_of_course;
    totalfees = coursefees;
    var librarymembership = prompt("do you take library membership");
var sportsmembership = prompt("do you take sports membership");
var transportmembership = prompt("do you take transport membership");
var canteenmembership = prompt("do you take canteen membership");

if (librarymembership == "yes") {
    totalfees = totalfees +2500
}
if (sportsmembership == "yes") {
    totalfees = totalfees + 4000
}
if (transportmembership == "yes") {
    totalfees = totalfees + 5000
}
if (canteenmembership == "yes") {
    totalfees = totalfees + 4500
}

var percentage = parseFloat(prompt("enter your percentage"));
var newfees = 0;
if (percentage >= 90 && percentage < 101) {
    newfees = totalfees * 0.5;
    totalfees = totalfees - newfees;
}
else if (percentage >= 80) {
    newfees = totalfees * 0.25;
    totalfees = totalfees - newfees;
}
document.write("<h5>you've taken :" + no_of_course + "</h5>")
document.write("<h5>your course fees is:" + coursefees + "</h5>")
document.write("<h5>you've taken :" + newfees + "</h5>")
document.write("<h5>you've taken :" + totalfees + "</h5>")

}

else{
document.write("<h1 style='color:red '>courses must be greaterthan 2 and less than 7</h1>")
}

