$(function(){
    let checkNode = $('#check');
    checkNode.change(function(){
        if(checkNode.prop('checked')==true){
            $('#pass').attr('type','text');
        }
        else{
            $('#pass').attr('type','password');
        }
    });

    $('#section1').mouseover(function(){
        $(this).addClass('block1');
    });
    $('#section1').mouseleave(function(){
        $('#section1').addClass('block');
    });
});