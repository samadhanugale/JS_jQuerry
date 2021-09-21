document.write("<h2>This is Heading</h2>");
document.write("This is some External JavaScript ");
// Dynamically typed language
// Datatype is not predefined!
// var,let,const
var stdID=245;
for(i=0;i<23;i++){
    document.write("Hello There :"+i);
    document.write("<br>");
}
companyName="NeoSoft";
document.write("company Name is : "+companyName);
var num1=27;
var num2=9;
var add=num1+num2;
document.write(`Addition is : ${add} `);
document.write("<br> multiplication is : "+ num1*num2);
document.write("<br> Substraction is : "+ num1-num2);
document.write("<br> Division is : "+ num1/num2);
document.write("<br> sum is : "+ num1*(2+num2));

// Dialog Boxes :
//window.alert("Alert!");
var status = window.confirm("Confirm?");
document.write("<br>Status :" + status)

// Prompt Box
var prompt = window.prompt("Enter Name : ");
document.write("<br>"+prompt);