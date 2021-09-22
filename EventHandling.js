function makeAdd(num1,num2){
    console.log("Addition : "+(num1+num2));
}
function test(){
    alert("This is Alert Message!");
}

//anonymous function
let anonymusHover = function(){
    console.log("Mouse Hover");
}
let anonymusLeave = function(){
    console.log("Mouse Leave");
}

//normal Function
function test1(num1,num2){
    let ad= num1-num2;
    return ad;
} //test1(12,13);

//annonymous function
let annoFunct = function(num1,num2){
    let ad = num1+num2;
    return ad;
}//annoFunction(12,13);

//arrow function
let arrowTest1 = (num1,num2)=>{
    let ad = num1+num2;
    return ad;

}//arrowTest1(12,13);

//for single parameter
let arrowTest2=num=>{
    let cube = num*num*num;
    return cube;
}//arrowTest2(12);

arrowTest3= num => console.log(num*num*num);
//arrowTest3(12);

let arrowTest4=num=>num*num*num; //automatically returns result
//let result = arrowTest4(12);

let focusFunct = () => console.log("Called on Focus");
let blurFunct = () => console.log("Called on Blur");

function changeEvent(){
    console.log("Chanaged Event occured!");
}

function selectEvent(){
    console.log("Select Event Occured!");
}