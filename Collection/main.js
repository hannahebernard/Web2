$(".book1").mouseenter(function(){
  $(".bookhover").show();
});


$(".book1").mouseleave(function(){
  $(".bookhover").hide();
});


$(".authordown").click(function(){
  $(".authormenu").toggleClass("authormenushow");
});

$(".genredown").click(function(){
  $(".genremenu").toggleClass("genremenushow");
});




