let fnameNode=document.getElementById("fname");
let spanNode1=document.getElementById("error1");

function validate1(){
    console.log("h1")
spanNode1.innerHTML="";
let fn=fnameNode.value;
if(fn==''){
spanNode1.innerHTML="This Field is required";
fnameNode.style.border="3px solid red";

}
else if(fn.includes(' ')){
    spanNode1.innerHTML="space not allowed";
    fnameNode.style.border="3px solid red";
}
else{
    fnameNode.style.border="3px solid green";
}
}

let lnameNode=document.getElementById("lname");
let spanNode2=document.getElementById("error2");

function validate2(){
    console.log("h2")
spanNode2.innerHTML="";
let ln=lnameNode.value;
if(ln==''){
spanNode2.innerHTML="This Field is required";
lnameNode.style.border="3px solid red";

}
else if(ln.includes('')){
    spanNode2.innerHTML="space not allowed";
    lnameNode.style.border="3px solid red";
}
else{
    lnameNode.style.border="3px solid green";
}
}

let passNode=document.getElementById("pass");
let spanNode3=document.getElementById("span3");
function validate3(){
    spanNode3.innerHTML="";
    let password=passNode.value;
    let regExp = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])");

    if(password==''){
        spanNode3.innerHTML="This Field is Required";
        passNode.style.border="3px solid red";
    }
    else if(password.length<4 || password.length>8){
        spanNode3.innerHTML="Password Should be4 to 8 character long";
        passNode.style.border="3px solid red";
    }
    else if(regExp.test(password)==false){
        spanNode3.innerHTML="Password should be alphanumeric with special symbol";
        passNode.style.border="3px solid red";
    }
    else{
        passNode.style.border="3px solid green";
    }
    }


    let c_passNode=document.getElementById("c_pass");
let spanNode4=document.getElementById("error4");
function validate4(){
    spanNode4.innerHTML="";
    let password=passNode.value;
    let c_password=c_passNode.value;
    //let regExp = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])");

    if(password==''){
        spanNode4.innerHTML="This Field is Required";
        c_passNode.style.border="3px solid red";
    }
    else if(c_password!=password){
        spanNode3.innerHTML="Password Should be Match";
        passNode.style.border="3px solid red";
    }
    
    else{
        c_passNode.style.border="3px solid green";
    }
    }

    let mailNode=document.getElementById("mailId");
    let spanNode5=document.getElementById("error5");
    function validate5(){
        spanNode5.innerHTML="";
        let mail=mailNode.value;
        let subs=mail.substring(mail.indexOf('@'+1));
       
        //let regExp = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])");
    
        if(mail==''){
            spanNode5.innerHTML="This Field is Required";
            mailNode.style.border="3px solid red";
        }
        else if(!mail.includes('@')||subs==''){
            spanNode5.innerHTML="Invalid emailId";
            mailNode.style.border="3px solid red";
        }
        
        else{
            mailNode.style.border="3px solid green";
        }
        }