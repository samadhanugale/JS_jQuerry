//string length calculate
let text = "ThisIsSomeTextJustTOCalculateLength   ";
document.getElementById("para1").innerHTML = text.length;

//slice method
let str = "Apple, Banana, Kiwi";
document.getElementById("para2").innerHTML = str.slice(9,13);

//slice method
let str1 = "Apple, Banana, Kiwi";
document.getElementById("para3").innerHTML = str1.slice(-4,-1);

//substring method
let str2 = "Apple, Banana, Kiwi";
document.getElementById("para4").innerHTML = str2.substring(7,13);

//substring method
let str3 = "Apple, Banana, Kiwi";
document.getElementById("para5").innerHTML = str3.substr(7);

//onclick change text
function clickFunct() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = text.replace("Text","Paragraph");
}

//to Uppercase
function toUpper() {
    let text = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML =
    text.toUpperCase();
}

//to Lowercase
function toLower() {
    let text = document.getElementById("lower").innerHTML;
    document.getElementById("lower").innerHTML =
    text.toLowerCase();
}

//concat text
let text1 = "text one ";
let text2 = "text two!";
let text3 = text1.concat(" ",text2);
document.getElementById("para6").innerHTML = text3;

//trim function
function trimFunction() {
    let text = "     trim Text with space     ";
    alert(text.trim());
}

//split function text split
let text5 = "WorkSpace";
const myArr = text5.split("");

text = "";
for (let i = 0; i < myArr.length; i++) {
  text5 += myArr[i] + "<br>"
}
document.getElementById("para7").innerHTML = text5;