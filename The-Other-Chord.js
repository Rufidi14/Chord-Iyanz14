$(document).ready(function(){
    $("#chord1").click(function(){
        $(".isichord1").toggle();
        $(".isichord2").hide();
        $(".isichord3").hide();
    });
    $("#chord2").click(function(){
        $(".isichord2").toggle();
        $(".isichord1").hide();
        $(".isichord3").hide();
    });
    $("#chord3").click(function(){
        $(".isichord3").toggle();
        $(".isichord2").hide();
        $(".isichord1").hide();
    });
});