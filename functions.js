function test(){
    console.log("Hello there!");
    //alert("AlertMessage!");
    let stat = confirm("Ok or Cancel?"); //confirmation ok or cancel

    if(stat) //if clicked ok then stat == 1 else stat == 0
        alert("success!");
    console.log("end!");
}
