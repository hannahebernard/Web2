$(".scroller").scrollFlight();
$(".title").on("arrived",function() {
  $(this).addClass("arrived");
});

$(".title1").scrollFlight();
$(".title1").on("arrived",function() {
  $(this).addClass("page2arrived");
});

$(".para1").scrollFlight();
$(".para1").on("arrived",function() {
  $(this).addClass("page2arrived");
});

$(".fighter").scrollFlight();
$(".fighter").on("arrived",function() {
  $(this).addClass("fightershow");
});

$(".title3").scrollFlight();
$(".title3").on("arrived",function() {
  $(this).addClass("page3arrived");
});

$(".para3").scrollFlight();
$(".para3").on("arrived",function() {
  $(this).addClass("page3arrived");
});

