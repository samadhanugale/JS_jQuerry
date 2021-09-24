$(function(){
    $("#btn1").mouseover(function(){
        $(".block").css("font-size","30px");
    });
    $("#btn2").mouseover(function(){
        $(".block").animate({"font-size":"40px",height:'400px', width:'500px'},800,'swing');
        $(".block").animate({"font-size":"30px",height:'300px', width:'400px'},600);
        $(".block").animate({"font-size":"40px",height:'400px', width:'500px'},600);
        $(".block").animate({"font-size":"30px",height:'300px', width:'400px'},600,()=>alert("Animation Completed!"));
        
    });
});