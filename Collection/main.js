/*$(".book1").mouseenter(function(){
  $(".bookhover").show();
});


$(".book1").mouseleave(function(){
  $(".bookhover").hide();
});*/

function addBook() {

  var $wrapper = $(".collectioncontainer");
  var $container = $("<div class='bookscontainer'>");
  var $book = $("<div class='book'>");
  var $bookimg = $(" <img scr = "images/civil_disobedience.jpg" >").attr();


  
  $container.append($book)

  $book.append($bookimg)

  $wrapper.append($container)

}


addBook();


