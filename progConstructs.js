var age = parseInt(window.prompt("Enter age "));
if(age>=18){
    document.write("Adult : Allowed");
}
else{
    document.write("Child : Restricted");
}

//While
var n = parseInt(window.prompt("Enter Number"));
var j = 0;
while(j<=n){
    document.write("<br>"+j);
    j++;
}

for(var k=0;k<=12;k++){
    document.write("<br>This is :"+k );
}