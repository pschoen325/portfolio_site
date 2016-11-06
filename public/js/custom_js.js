$(document).ready(function () {
  $("section").css("min-height", $(window).height() );
});

$(function(){
    $(".type").typed({
        strings: ["Paul Schoen"],
        typeSpeed: 80,
        showCursor: false
    });
});
$(function(){
    $(".type1").typed({
        strings: ["Junior Web Developer."],
        typeSpeed: 50,
        showCursor: false,
        startDelay: 1400
    });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(".wynork").hover(function () {
      $(".stage").css({ "background": "url('https://i.gyazo.com/ec05fe1c0476a089186f03c44889fff7.gif')" });
   },
   function () {
      $(".stage").css({ "background": "https://i.gyazo.com/ec05fe1c0476a089186f03c44889fff7.gif')" });
   }
);

$(".discord").hover(function () {
      $(".stage").css({ "background": "url(https://i.gyazo.com/8c00820979ca19e74efb64fa9ae6a341.gif)" });
   },
   function () {
      $(".stage").css({ "background": "https://i.gyazo.com/8c00820979ca19e74efb64fa9ae6a341.gif')" });
   }
);

// Message to Developers
console.log("This site will be under a lot of work.")
