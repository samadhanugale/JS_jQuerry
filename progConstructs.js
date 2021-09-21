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

for(k=0;k<=5;k++){
    document.write("<br>This is :"+k );
}

var percent = 46.8;
if(percent<=35){
    document.write("<br>Failed");
}
else if(percent<60 && percent>35){
    document.write("<br>average");
}
else if(percent<80 && percent>60){
    document.write("<br>better");
}
else{
    document.write("<br>Best");
}

switch(true){
    case percent<35 :
        document.write("<br>SWITCH FAILED");

    case percent<75 && percent>35 :
        document.write("<br>better");

    case percent>75:
        document.write("<br>Best");
}
