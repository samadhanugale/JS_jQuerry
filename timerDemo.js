let headNode = document.getElementById("head");
setTimeout(()=>headNode.innerHTML="Happy to see you!",6000);
let colorArray = ['red','green','orange','pink'];
let counter = 0;
setInterval(()=>test(),1000);
function test(){
    console.log("Hello there!");
    headNode.style.color = colorArray[counter];
    counter++;

    if(counter ==colorArray.length)
        counter = 0;
}