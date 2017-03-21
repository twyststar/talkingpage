$(document).ready(function() {

  $("#catbutton").click(function(){
    $(".kitty").show();
  });
  $("#dogbutton").click(function(){
    $(".puppy").show();
  });

  $("button#cat").click(function() {
    $("ul#user").prepend("<li>Meow</li>");
    $("ul#webpage").prepend("<li>Bark!</li>");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#dog").click(function() {
    $("ul#webpage").prepend("<li>Bark</li>");
    $("ul#user").prepend("<li>meow</li>");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Purrrrr!</li>");
    $("ul#webpage").prepend("<li>*wag wag wag*</li>");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });

});
