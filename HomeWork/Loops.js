console.log("Hello there!");

document.write("Odd numbers till 20 : ");

let i = 0;
while(i<=20){
    document.write("  ");
    if(i%2!= 0)
        document.write(i);
    i++;
}

document.write("<br>");
document.write("Prime numbers till 20 : ");


var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for (let i=2 ; i<=array.length-1; i++) {
    if((i%2===0) || (i%3===0))
        continue;
    document.writeln(i+",");
}

document.write("<br>");
document.write("Fibonacci Numbers : ");
var fib = [0, 1];
for(let i=fib.length; i<10; i++) {
    fib[i] = fib[i-2] + fib[i-1];
}
document.write(fib);

