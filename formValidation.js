//Accessing nodes
let fnameNode = document.getElementById("fname");
let spanNode = document.getElementById("error1");

//onEvent function
function validate1(){
    spanNode.innerHTML = "";
    let fname = fnameNode.value;

    //if nothings entered here
    if(fname == ''){
        spanNode.innerHTML = "Thie field is required!";
        fnameNode.style.border = "2px solid red";
    }

    //space given in name
    else if(fname.includes(' ')){
        spanNode.innerHTML = "spacenot allowed";
        fnameNode.style.border = "2px solid red";
    }

    //name given correctly
    else{
        fnameNode.style.border = "2px solid green";
    }
}

//Accessing nodes
let lnameNode = document.getElementById("lname");
let spanNode1 = document.getElementById("error2");

//onEvent function
function validate2(){
    spanNode1.innerHTML = "";
    let lname = lnameNode.value;

    //if nothings entered here
    if(lname == ''){
        spanNode1.innerHTML = "Thie field is required!";
        lnameNode.style.border = "2px solid red";
    }

    //space given in name
    else if(lname.includes(' ')){
        spanNode1.innerHTML = "spacenot allowed";
        lnameNode.style.border = "2px solid red";
    }

    //name given correctly
    else{
        lnameNode.style.border = "2px solid green";
    }
}


// function showPass(){
//     let checknote  = document.getElementById("checkbox");
//     let passsnode = document.getElementById("pass");

//     if (checknote.checked==true){
//         passsnode.type = "text";
//    }
//     else{
//        passsnode.type = "password";
//    }
// }

let passNode = document.getElementById("pass");
let spanNode3 = document.getElementById("error3");


function validate3(){
    spanNode3.innerHTML = "";
    let password = passNode.value;
    let regExp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    console.log(password);
    console.log(regExp.test(password));
    if(passNode = ""){
        spanNode3.innerHTML = "This field is required!";
        passNode.style.border = "2px solid red";
    }
    else if(password.length<=4 || password.length>=8){
        spanNode3.innerHTML = "password shouild in between 4 to 8 characters";
        passNode.style.border = "2px solid red";
    }
    else{
       // passNode.style.border = "3px solid green";
    }
}

let cpassNode = document.getElementById("c_pass");
let spanNode4 = document.getElementById("error4");
function validate4(){
    spanNode4.innerHTML = "";
    let password = passNode.value;
    let cpassword = cpassNode.value;
    if(passNode = ""){
        spanNode4.innerHTML = "This field is required!";
        cpassNode.style.border = "2px solid red";
    }
   else if (cpassword!=password){
    spanNode4.innerHTML = "Password not matching!!";
    cpassNode.style.border = "2px solid red";
   }
   else{
    cpassNode.style.border = "3px solid green";
   }
}