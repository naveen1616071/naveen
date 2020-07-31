/* Page Force to top on reload */
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

/* Scroll Bar Color Change */
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
          $(".black").css("background" , "#000");
        }
  
        else{
            $(".black").css("background" , "rgba(0,0,0,0.6)");  	
        }
  })
});
  
  /* NP Prograss Bar */
$('body').show();
  NProgress.start();
  setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 1000);
  $("#b-0").click(function() { NProgress.start(); });
  $("#b-40").click(function() { NProgress.set(0.4); });
  $("#b-inc").click(function() { NProgress.inc(); });
  $("#b-100").click(function() { NProgress.done(); });

/* Smooth Scroll */
        $(document).ready(function(){
            $("a").on('click', function(event) {
              if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                  scrollTop: $(hash).offset().top
                }, 800, function(){
                  window.location.hash = hash;
                });
              }
            });
          });




/* On resize reload 
window.onresize = function(event){ 
  document.location.reload(true); 
}*/

/* Warning usage of <320px devices */
var windowSize = window.innerWidth ;
//console.log(windowSize);


if(windowSize<320){
  document.querySelector('body').style.display = 'none';
  alert('Use 320px or 320px + screen resolution to see webpage');
}

/* Update Soon Call */
// $(document).ready(function() {
//   $('#update-soon').click(function() {
//     alert('Resume will be update soon');
//   });
// });


$(document).on("click",".contant-update ",function(e){ 
  alert('Contant form submission will be update Soon');
});

