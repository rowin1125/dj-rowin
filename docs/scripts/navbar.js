$(document).ready(function(){
  $('#Main_Menu').click(function(e){
    e.preventDefault();
    $('body').toggleClass('with--sidebar');
  });

  var url = window.location.pathname;

  $(".menu-list li a").each(function(){
    var pathName = "";
    (url !== "/") ? pathName = url.replace(/\/$/, "") : pathName = "/";

    if(pathName == $(this).attr("href")) {
      $(this).addClass('active');
    }
  })
});
