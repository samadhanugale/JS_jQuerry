$(document).ready(function(){
    $('#btn').click(function(){
        let label = $('#btn').val();
        if(label == "FADEIN"){
            $('img').fadeIn(2000,function(){
                $('#btn').val("FADEOUT");
                $('#btn').html("FADE OUT");
            });
        }
          else{
              $('img').fadeOut(2000,function(){
                  $('#btn').val("FADEIN");
                  $('#btn').html("FADE IN");
              })
            }  
    });
    $('#btn2').click(function(){
        $('img').slideToggle(2000);
    });
    $('#chain').click(function(){
       $('img').toggle(1000).slideToggle(1000).fadeToggle(1000,function(){
        alert("Animation Completed");
       });
    });        
});
