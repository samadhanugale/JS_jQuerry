let articleNode = document.getElementById("article");
console.log(articleNode);

let cls = document.getElementsByClassName("cl");
console.log(cls);

let node2 = document.getElementsByName("gender");
console.log(node2);

let node3= document.getElementsByTagName("p");
console.log(node3);

function showChilds(){
    console.log(articleNode.children);
}

let headEement = document.createElement("h2");
headEement.innerHTML="Hey there!";
articleNode.appendChild(headEement);

// let fignode = document.getElementById("article");
// articleNode.insertBefore(headEement,fignode);

let imgnode = document.getElementById("img");
console.log(imgnode.height);
console.log(imgnode.width);
console.log(imgnode.src);

let h = imgnode.height;
let w = imgnode.width;

function zoomOut(){
   h = h-200;
    w = w-200;
   imgnode.height = h;
    imgnode.width = w;
}
function zoomIn(){
    h = h+100;
     w = w+100;
    imgnode.height = h;
     imgnode.width = w;
}



//to show and hide password by tikbox
function showPass(){
     let checknote  = document.getElementById("checkbox");
     let passsnode = document.getElementById("pass");

     if (checknote.checked==true){
         passsnode.type = "text";
    }
     else{
        passsnode.type = "password";
    }
}

let paraNode = document.getElementById("para1");
paraNode.addEventListener("mouseover",function(){
    changeStyle();
});
paraNode.addEventListener("mouseout",function(){
    changeStyle1();
});
paraNode.addEventListener("onclick",function(){
    changeStyle2();
});
function changeStyle(){
    paraNode.style.backgroundColor = "yellow";
    paraNode.style.border = "2px solid red";
}
function changeStyle1(){
    paraNode.style.backgroundColor = "green";
    paraNode.style.border = "4px solid pink";
}
function changeStyle2(){
    paraNode.style.backgroundColor = "red";
    paraNode.style.border = "4px solid black";
}