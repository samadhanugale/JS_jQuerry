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
    // Specific by type
    $(".impField").focus(
    function(){
        $('[type="text"]').css({border:"6px solid maroon"});
    }        
    );
    $(".impField").focus(
        function(){
            $('[type="password"]').css({border:"6px solid green"});
        });
// This
        $(".imp").focus(
            function(){
                $(this).css({background:"lightblue"});
        });
        $(".impField").focus(
            function(){
            let currentType = $(this);
            if(currentType.attr('type') == 'text'){
                currentType.css({border : '4px solid black'});
            }
            if(currentType.attr('type') == 'password'){
                currentType.css({border : '4px solid red'});
            }    
            });
});

