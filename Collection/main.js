
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

   var url = item.Large

   var $thumbnail = $("<img class='large'>").attr("src",url);

  
   $(".modal").append($infobox).append($thumbnail).append($title)
  $(".infobox").append($author).append($date).append($location);
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


   var $container = $('.collection');
  /*$container.packery({
    itemSelector: '.book',
    gutter: 10,
  });*/

  var myCollection = $(".book").collection({
    filters: { 
      "location-facet": "[data-location]",
      "genre-facet": "[data-genre]",
      "started-facet": "[data-started]",
      "date-facet": "[data-date]",
    },


     /*update: function() { 
      $container.packery(); 
      setTimeout(function() { $container.packery()},600);
    },
    ordered: function() {
      $container.packery('reloadItems');
      console.log("Whoa");
    },
    hide: function($elem) { $elem.hide(); },
    show: function($elem) { $elem.fadeIn(500); },*/

  });


      $(".location").on("click",function(e) {

      var location = $(this).data("location");

     var text;
      if(location) {
        text = $(this).text() ;
      } else {
        text = "Location";
      }

      $("#locationfilter").text(text)


      myCollection.filtered("location-facet",location);
  });

      $(".genre").on("click",function(e) {

      var genre = $(this).data("genre");

         var text;
      if(genre) {
        text = $(this).text() ;
      } else {
        text = "Genre";
      }

      $("#genrefilter").text(text)

      myCollection.filtered("genre-facet",genre);
  });



        $(".started").on("click",function(e) {

      var started = $(this).data("started");

       var text;
      if(started) {
        text = $(this).text() ;
      } else {
        text = "Started";
      }

      $("#startedfilter").text(text)
      myCollection.filtered("started-facet",started);
  });




        $(".date").on("click",function(e) {

      var date = $(this).data("date");
      var text;
      if(date) {
        text = $(this).text() ;
      } else {
        text = "Date Published";
      }

      $("#publishedfilter").text(text)
      myCollection.filtered("date-facet",date);


  });



     $(".all").on("click",function(e) {
      myCollection.filtered("location-facet","");
      myCollection.filtered("genre-facet","");
      myCollection.filtered("started-facet","");
      myCollection.filtered("date-facet","");

       $("#publishedfilter").text("Date Published")
       $("#genrefilter").text("Genre")
       $("#locationfilter").text("Location")
       $("#startedfilter").text("Started")
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
  $book.attr("data-genre",item.Genre);
  $book.attr("data-started",item.Started);
  $book.attr("data-date",item.Date);

  $book.append($thumbnail)
  
  $container.append($book)

    $thumbnail.on("click",function(e) {
      showModal(item);
  });

       $overlay.on("click",function(e) {
      hideModal(item);
  });

  }


  Tabletop.init( { key: "https://docs.google.com/spreadsheets/d/1_EmMnzRcE7C9hv4wN_k8Izq46zYYENvqWAk7k1I-j3s/pubhtml?gid=0&single=true",
                   callback: callback,
                   simpleSheet: true } )



