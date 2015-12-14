
$(".scroller").scrollFlight();


$(".beginbox").on("arriving",function(e) {
  $(this).addClass("boxarrive");
});



$(".story1").mouseenter(function(){
    $(".story1").addClass("story1hover");
});


$(".story1").mouseleave(function(){
    $(".story1").removeClass("story1hover");
});


$(".story1p").mouseenter(function(){
    $(this).addClass("story1phover");
});


$(".story1p").mouseleave(function(){
    $(this).removeClass("story1phover");
});


$(".story2").mouseenter(function(){
    $(".story2").addClass("story2hover");
});

$(".story2").mouseleave(function(){
    $(".story2").removeClass("story2hover");
});

$(".story2p").mouseenter(function(){
    $(this).addClass("story2phover");
});


$(".story2p").mouseleave(function(){
    $(this).removeClass("story2phover");
});

$(".story3").mouseenter(function(){
    $(".story3").addClass("story3hover");
});

$(".story3").mouseleave(function(){
    $(".story3").removeClass("story3hover");
});

$(".story3p").mouseenter(function(){
    $(this).addClass("story3phover");
});


$(".story3p").mouseleave(function(){
    $(this).removeClass("story3phover");
});


$(".story1").click(function(){
  $(".container1").show();
  $(".page5").addClass("page5dark");
});


$(".story2").click(function(){
  $(".container2").show();
  $(".page5").addClass("page5dark");
});

$(".story3").click(function(){
  $(".container3").show();
  $(".page5").addClass("page5dark");
});


/*Choose Your Journey GD4*/

$(".load3page3").on("arrived",function(e) {
$("#personaicon").show();
});

$(".option1").mouseenter(function(e){
    $(".option1hint").show();
});

$(".option1").mouseleave(function(e){
    $(".option1hint").hide();
});

$(".option2").mouseenter(function(e){
    $(".option2hint").show();
});

$(".option2").mouseleave(function(e){
    $(".option2hint").hide();
});

$(".databutton").click(function(e) {
$(".data1").show();
$(".locationtext").hide();
});

$(".storybutton").click(function(e) {
$(".locationtext").show();
$(".data1").hide();
});


/*$(".story1").click(function(){


var $container = $(".container");

var $downarrow = $("<div class='downarrow2'>");

  var $storyDetails = $("<div class='storyDetails'>");
  var $detailsText = $("<p class='details'>").text("Brother and sister, Yana and Victor were living with their uncle in the al-Hasakah governorate before their villiage was shelled.")
  var $detailsTextTwo = $("<p class='details'>").text("They have both been seperated from the rest of their family and are trying to find shelter and safety. ")
  


  var $load1page1 = $("<div class='load1page1'>")
  var $quote = $("<p class='scroller load1quote'>").text("To start with the violence wasn’t so extreme. We could cope. But now they’ve started to kill children.")

  var $load1page2 = $("<div class='load1page2'>")
  var $detailsTextThree = $("<p class='details'>").text("As Yana, you are now a displaced person inside of Syria, responsible for getting you and your little brother to shelter and safety.")
 
  var $load1page3 = $("<div class='load1page3'>")

$(".story1").addClass("story1hoverstay");
$(".story1p").addClass("story1phoverstay");

  $(".containerinvisible").addClass("container");
  $(".page5").addClass("page5dark");

  $(".stories").append($downarrow);


 $(".container").append($storyDetails);
 $storyDetails.append($detailsText); $storyDetails.append($detailsTextTwo);

$storyDetails.after($load1page1);
$load1page1.append($quote);

$(".scroller").scrollFlight();

$(".load1quote").on("arriving",function() {
  $(this).addClass("load1quotearrive");
});

$load1page1.after($load1page2);
$load1page2.append($detailsTextThree);

$load1page2.after($load1page3);

});


$(".story2").click(function(){


var $container = $(".container");

var $downarrow = $("<div class='downarrow2'>");

  var $storyDetails = $("<div class='storyDetails'>");
  var $detailsText = $("<p class='details'>").text("Rima is a single grandmother who was living with her daughter and grandson before her village was attacked and her daughter killed. ")
  var $detailsTextTwo = $("<p class='details'>").text("Now, she has no choice but to flee with her grandson. The only question now is where can they turn to? ")
  


  var $load2page1 = $("<div class='load2page1'>")
  var $quote = $("<p class='scroller load2quote'>").text("In my village there are a lot of houses being destroyed by air strikes, shells, tanks. Not one house is left untouched.")

  var $load2page2 = $("<div class='load2page2'>")
  var $detailsTextThree = $("<p class='details'>").text("As Rima, you are now responsible for your grandchild and navigating the dangerous territory of Syria from Affrin in the Aleppo governorate.")
 
  var $load2page3 = $("<div class='load2page3'>")

$(".story2").addClass("story2hoverstay");
$(".story2p").addClass("story2phoverstay");

  $(".containerinvisible").addClass("container");
  $(".page5").addClass("page5dark");
  $(".stories").append($downarrow);


 $(".container").append($storyDetails);
 $storyDetails.append($detailsText); $storyDetails.append($detailsTextTwo);

$storyDetails.after($load2page1);
$load2page1.append($quote);

$(".scroller").scrollFlight();

$(".load2quote").on("arriving",function() {
  $(this).addClass("load2quotearrive");
});

$load2page1.after($load2page2);
$load2page2.append($detailsTextThree);

$load2page2.after($load2page3);

});




$(".story3").click(function(){


var $container = $(".container");

var $downarrow = $("<div class='downarrow2'>");

  var $storyDetails = $("<div class='storyDetails'>");
  var $detailsText = $("<p class='details'>").text("Hoda, Aadam, Bilal, Sora, & Mohamad used to live comfortably in their home in, As Salamiyah, the Syrian city in the Hama governorate.")
  var $detailsTextTwo = $("<p class='details'>").text("A recent attack has left the family with no choice but to become displaced within their own country. The only question now is where can they turn to?")
  


  var $load3page1 = $("<div class='load3page1'>")
  var $quote = $("<p class='scroller load3quote'>").text("Our neighbor’s house was completely destroyed and ours was very badly damaged. I was so afraid. I had to run out of the house. At 5am, I left with my children.")

  var $load3page2 = $("<div class='load3page2'>")
  var $detailsTextThree = $("<p class='details'>").text("As Hoda, you are now responsible for saving your family fleeing from the Hama governorate. Where do you turn?")
 
  var $load3page3 = $("<div class='load3page3'>")

$(".story3").addClass("story3hoverstay");
$(".story3p").addClass("story3phoverstay");

  $(".containerinvisible").addClass("container");
  $(".page5").addClass("page5dark");
  $(".stories").append($downarrow);


 $(".container").append($storyDetails);
 $storyDetails.append($detailsText); $storyDetails.append($detailsTextTwo);

$storyDetails.after($load3page1);
$load3page1.append($quote);

$(".scroller").scrollFlight();

$(".load3quote").on("arriving",function() {
  $(this).addClass("load3quotearrive");
});

$load3page1.after($load3page2);
$load3page2.append($detailsTextThree);

$load3page2.after($load3page3);

});*/


