

$(".switch").on("click",function(e){
  $(".switch").toggleClass("left");
  $(".switch").toggleClass("test2");
  $(".grillinside").toggleClass("grillinsideon"); 
  $(".grillsides").toggleClass("grillinsideon2");
});




$(".geartop1").on("click",function(e){
  $(".geartop1").toggleClass("gearturn");
   $(".gearconnector").toggleClass("gearconnectoron");

});



$(".line1").on("click",function(e){
  $(".line1").toggleClass("turn");
  $(".grillbar1").toggleClass("baron");
  $(".grillbar2").toggleClass("baron");
  $(".grillbar21").toggleClass("baron");
});

$(".line2").on("click",function(e){
  $(".line2").toggleClass("turn");
   $(".grillbar31").toggleClass("baron");
  $(".grillbar3").toggleClass("baron");
  $(".grillbar32").toggleClass("baron");
});

$(".line3").on("click",function(e){
  $(".line3").toggleClass("turn");
   $(".grillbar4").toggleClass("baron");
  $(".grillbar41").toggleClass("baron");
  $(".grillbar5").toggleClass("baron");
});





$(".patty1").on("click",function(e){
  $(".patty1").addClass("ongrill1");
  $(".patty1").addClass("cooked");

});


$(".patty2").on("click",function(e){
  $(".patty2").addClass("ongrill2");
  $(".patty2").addClass("cooked");

});

$(".patty3").on("click",function(e){
  $(".patty3").addClass("ongrill3");
  $(".patty3").addClass("cooked");

});


