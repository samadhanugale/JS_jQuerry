$(document).ready(function(){
    let fnameNode = $("#fname");
    let spanNode = $("#error1");

    let lnameNode = $("#lname");
    let spanNode1 = $("#error2");

    let passNode = $("#pass");
    let spanNode3 = $("#error3");

    let cpassNode = $("#c_pass");
    let spanNode4 = $("#error4");

    let emailNode = $("#emailID");
    let spanNode5 = $("#error5");

    let ageNode = $("#age");
    let spanNode6 = $("#error6");

    let mobNode = $("#mob");
    let spanNode7 = $("#error7");
    let formNode = $("#formRegister");
    $("fname").blur(function(){
        spanNode.html("Thie field is required!");
        fnameNode.css({border:"2px solid red"});
        console.log("Hell");
    });
    fnameNode.blur(()=>validate1());
    lnameNode.blur(()=>validate2());
    passNode.blur(()=>validate3());
    cpassNode.blur(()=>validate4());
    emailNode.blur(()=>validate5());
    ageNode.blur(()=>validate6());
    mobNode.blur(()=>validate7());

    formNode.submit(function(){
        return validateForm();
    });
    console.log("Hello there!");

    function validate1(){
        spanNode.html('');
        let fname = fnameNode.val();
    
        //if nothings entered here
        if(fname == ''){
            spanNode.html("Thie field is required!");
            fnameNode.css({border:"2px solid red"});
            return false;
        }
    
        //space given in name
        else if(fname.includes(' ')){
            spanNode.html("Thie field is required!");
            fnameNode.css({border:"2px solid red"});
            return false;
        }
    
        //name given correctly
        else{
            fnameNode.css({border:"2px solid green"});
            return true;
        }
    }
    //---------------------------------------Last Name--------------------------------------------------------
//Accessing nodes

//onEvent function
function validate2(){
    spanNode1.html("");
    let lname = lnameNode.val();

    //if nothings entered here
    if(lname == ''){
        spanNode1.html("Thie field is required!");
        lnameNode.css({border:"2px solid red"});
        return false;
    }

    //space given in name
    else if(lname.includes(' ')){
        spanNode1.html("Thie field is required!");
        lnameNode.css({border:"2px solid red"});
        return false;
    }

    //name given correctly
    else{
        lnameNode.css({border:"2px solid green"});
        return true;
    }
}

//----------------------------password-------------------------------------------------------------------



function validate3(){
    spanNode3.html("");
    let password = passNode.val();
    let regExp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    console.log(password);
    console.log(regExp.test(password));
    if(passNode == ""){
        spanNode3.html("This field is required!");
        passNode.css({border:"2px solid red"});
        return false;
    }
    else if(password.length<4 || password.length>8){
        spanNode3.html("password shouild in between 4 to 8 characters");
        passNode.css({border:"2px solid red"});
        return false;
    }
    else{
        passNode.css({border:"3px solid green"});
        return true;
    }
}
//-------------------------------------confirm Password----------------------------------------------------------


function validate4(){
    spanNode4.innerHTML = "";
    let password = passNode.value;
    let cpassword = cpassNode.value;
    if(passNode == ""){
        spanNode4.innerHTML = "This field is required!";
        cpassNode.style.border = "2px solid red";
        return false;
    }
   else if (cpassword!=password){
    spanNode4.innerHTML = "Password not matching!!";
    cpassNode.style.border = "2px solid red";
    return false;
   }
   else{
    cpassNode.style.border = "3px solid green";
    return true;
   }
}

//-------------------------------------Email ID----------------------------------------------------------


function validate5(){
    spanNode5.innerHTML = "";
    let email = emailNode.value;
    let subs = email.substring(email.indexOf('@'+1));
    var re = /\S+@\S+\.\S+/;
    let emailStat = re.test(email);
    if(email == ""){
        spanNode5.innerHTML = "This field is required!";
        emailNode.style.border = "2px solid red";
        return false;
    }

   else if (emailStat != true){
    spanNode5.innerHTML = "Incorrect Email";
    emailNode.style.border = "2px solid red";
    return false;
   }

   else{
    emailNode.style.border = "3px solid green";
    return false;
   }
}

//-------------------------------------Age----------------------------------------------------------

function validate6(){
    spanNode6.innerHTML = "";
    let age = ageNode.value;
   
    
   if (age <1){
    spanNode6.innerHTML = "Invalid age!";
    ageNode.style.border = "2px solid red";
    return false;
   }

   else{
    ageNode.style.border = "3px solid green";
    return true;
   }
}

//-------------------------------------Phone Number----------------------------------------------------------

function validate7(){
    spanNode7.innerHTML = "";
    let mob = mobNode.value;

    var regmm='^([0|+[0-9]{1,5})?([7-9][0-9]{9})$';
    var regmob = new RegExp(regmm);
    let valid = regmob.test(mob);
   
    
   if (valid != true ){
    spanNode7.innerHTML = "Invalid Number!";
    mobNode.style.border = "2px solid red";
    return false;
   }

   else{
    mobNode .style.border = "3px solid green";
    return true;
   }
}
function validateForm(){
    let v1 = validate1();
    let v2 = validate2();
    let v3 = validate3();
    let v4 = validate4();
    let v5 = validate5();
    let v6 = validate6();
    let v7 = validate7();

    return(v1&&v2&&v3&&v4&&v5&&v6&&v7 == true)
}
});


