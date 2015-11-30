
function callback(data) {
    console.log(data);  
  }

  Tabletop.init( { key: "https://docs.google.com/spreadsheets/d/1_EmMnzRcE7C9hv4wN_k8Izq46zYYENvqWAk7k1I-j3s/edit?usp=sharing",
                   callback: callback,
                   simpleSheet: true } )



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




