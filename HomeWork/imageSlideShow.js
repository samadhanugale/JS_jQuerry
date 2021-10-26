$(document).ready(function(){
    $('#btn1').click(function(){
        $('#img1').height(400).width(400);
        console.log("Success");
    });
    $('#btn2').click(function(){
        $('#img1').height(200).width(200);
        console.log("Success");
    });
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);