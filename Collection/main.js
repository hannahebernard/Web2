/*$(".book1").mouseenter(function(){
  $(".bookhover").show();
});


$(".book1").mouseleave(function(){
  $(".bookhover").hide();
});*/

function addBook(url) {

  var url = ;
  var $wrapper = $(".collectioncontainer");
  var $container = $("div class='bookscontainer'>");
  var $book = $("<img class='book'>").attr("src",url);

  
  $container.append($book)

  $wrapper.append($container)

}

addBook();


