
$(".authordown").mouseenter(function(){
  $(".authormenu").addClass("authormenushow");
});

$(".authormenu").mouseleave(function(){
  $(".authormenu").removeClass("authormenushow");
});



$(".publisheddown").mouseenter(function(){
  $(".publishedmenu").addClass("publishedmenushow");
});

$(".publishedmenu").mouseleave(function(){
  $(".publishedmenu").removeClass("publishedmenushow");
});

$(".genredown").mouseenter(function(){
  $(".genremenu").addClass("genremenushow");
});

$(".genremenu").mouseleave(function(){
  $(".genremenu").removeClass("genremenushow");
});


$(".starteddown").mouseenter(function(){
  $(".startedmenu").addClass("startedmenushow");
});

$(".startedmenu").mouseleave(function(){
  $(".startedmenu").removeClass("startedmenushow");
});

$(".locationdown").mouseenter(function(){
  $(".locationmenu").addClass("locationmenushow");
});

$(".locationmenu").mouseleave(function(){
  $(".locationmenu").removeClass("locationmenushow");
});






function showModal(item) {

   $(".modal").empty();
   
   var $infobox = $("<div class='infobox'>")
   var $title = $("<p class='title'>").text(item.Title);
   var $author = $("<p class='info'>").text(item.Author);
   var $location = $("<p class='info'>").text(item.Location);
   var $date = $("<p class='info'>").text(item.Published);
   var $started = $("<p class='info'>").text(item.Started);

   var url = item.Large

   var $thumbnail = $("<img class='large'>").attr("src",url);

  
   $(".modal").append($infobox).append($thumbnail).append($title)
  $(".infobox").append($started).append($author).append($location).append($date);
   $(".overlay").show();
   $(".modal").show();

}


function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}







function callback(data) { 
	console.log(data)

 addBooks(data);

  var myCollection = $(".item").collection({
    filters: { 
      "location-facet": "[data-location]"
    }
  });


      $(".location").on("click",function(e) {

      var location = $(this).data("location");

      myCollection.filtered("location-facet",location);
  });


}


function addBooks(booksData) {

  for(var i=0; i<booksData.length; i++) {

    addBook(booksData[i]);
  }
}



 function addBook(item) {

  var url = item.Photo;

  var $container = $(".bookscontainer");

  var $book = $("<div class='book'>");
  
  var $thumbnail = $("<img>").attr("src",url);

  var $overlay = $(".overlay")

  $book.attr("data-location",item.Location);

  $book.append($thumbnail)
  
  $container.append($book)

    $thumbnail.on("click",function(e) {
      showModal(item);
  });

       $overlay.on("click",function(e) {
      hideModal(item);
  });

  }


/*function showModal(item){


var url = item.Photo
 var title = video.snippet.title;
  var videoId = video.id.videoId;

  var $overlay = (".overlay")


  
	$(".modal").empty();
   	$(".modal").append($thumbnail).append($title)
  	$(".modal").show();
}*/





  /*$container.packery({
    itemSelector: '.item',
    gutter: 10,
  });

  var myCollection = $(".item").collection({
    filters: { 
      "title": "h2",
      "category": "[data-category]"
    },

    update: function() { 
      $container.packery(); 
      setTimeout(function() { $container.packery()},600);
    },
    ordered: function() {
      $container.packery('reloadItems');
      console.log("Whoa");
    },
    hide: function($elem) { $elem.hide(); },
    show: function($elem) { $elem.fadeIn(500); },
  });

  $(".category").on("click",function(e) {
      var category = $(this).data("category");
      $("#filter-bar button.category").removeClass("selected");
      $(this).addClass("selected");
      myCollection.filtered("category",category);
  });


  $(".order").on("click",function(e) {
      var order = $(this).data("order");
      $("#filter-bar button.category").removeClass("selected");
      $(this).addClass("selected");
      myCollection.ordered(order);
  });



  $("#search").on("change keyup",function(e) {
      myCollection.filtered("title", $(this).val());
  });

  $(".overlay").on("click",function(e) {
      hideModal();
  });
*/


  Tabletop.init( { key: "https://docs.google.com/spreadsheets/d/1_EmMnzRcE7C9hv4wN_k8Izq46zYYENvqWAk7k1I-j3s/pubhtml?gid=0&single=true",
                   callback: callback,
                   simpleSheet: true } )



