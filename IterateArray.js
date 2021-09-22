let salaryArray = [1111,2222,3333,4444,5555];
document.write("<br> Normal For Loop");

//ForwardArray
for (let i= 0;i<salaryArray.length;i++){
    document.write("<br>" + salaryArray[i] + "<br>");
}

document.write("<br> Backward For Loop");
//BackWordForLoop
for (let i = salaryArray.length-1;i>=0;i--){
    document.write("<br>" + salaryArray[i] + "<br>");
}

document.write("<br> Enhanced For Loop");
//Enhanced For loop starts from first element and goes till end
for (let salary of salaryArray){
    document.write("<br>" + salary +"<br>");
}

//Foreach loop
document.write("<br> Anonymous For Loop <br>");
salaryArray.forEach(function(ele , ind , arr){
    document.write(ele + " Index : " + ind);
    document.write("<br>")
});

//Compressed arrow function for loop
document.write("<br> arrow For Loop <br>");
salaryArray.forEach(ele=>document.write(ele + "<br>"));
salaryArray.forEach(ele=>console.log(ele ));

// Filter, fing , map, reduce
// find : salaries<8000 : srray with matching records
//map : salary/2 : new array of records
//reduce : sum of array elements and return single result

let filterArray = salaryArray.filter(ele => ele<3333);
// matching values will be stored in filterArray
console.log(filterArray);
//printing one by one
filterArray.forEach(el=>console.log(el));