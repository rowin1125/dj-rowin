$(document).ready(function(){
  $('#Main_Menu').click(function(e){
    e.preventDefault();
    $('body').toggleClass('with--sidebar');
  });

  var url = window.location.pathname;
  var urlRel = url.replace('/YoungCapital-international', '');

  $(".menu-list li a").each(function(){
    var pathName = "";
    (urlRel !== "/") ? pathName = urlRel.replace(/\/$/, "") : pathName = "/";

    if(pathName == $(this).attr("href").substr(this.href.lastIndexOf('/'))) {
      $(this).addClass('active');
    }
  });
});
