$(document).ready(function(){
  //Typed js function to type the strings
  $(function() {
    $("#hello").typed({
      strings: ["<p>Hello!</p>^1000<p>We are Apple Pineapple Team.<p>\
      ^1000<p>We are...</p>^1000<span id = \"logo\"></span>"],
      typeSpeed: 5,

      callback: function() {
        $(".typed-cursor").remove(); //removing cursor
        $("#logo").typed({
          strings: ["Tarsem", "Rasan", "Hardeep", "Samreen", "Ash!!"],
          typeSpeed: 30,

          callback: function(){
            $(".typed-cursor").remove(); //removing cursor

            //Click the developer button and the div disappears
            $("#logo").click(removeHome);
            setTimeout(removeHome, 2000);
          }
        });
      }
    });
  }
)
});

function removeHome() {
  $("body").css("overflow", "auto");
  $("#canvas-row").slideUp("slow", function() {
    $("#nav").addClass("navbar-fixed-top");
    $("#canvas-row").remove();
  });
}
