$(document).ready(function () {
  Glitch();

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

  $("section").css("min-height", $(window).height() );

  var __resetLayout = Packery.prototype._resetLayout;
  Packery.prototype._resetLayout = function() {
    __resetLayout.call( this );
    // reset packer
    var parentSize = getSize( this.element.parentNode );
    var colW = this.columnWidth + this.gutter;
    this.fitWidth = Math.floor( ( parentSize.innerWidth + this.gutter ) / colW ) * colW;
    this.packer.width = this.fitWidth;
    this.packer.height = Number.POSITIVE_INFINITY;
    this.packer.reset();
  };

  Packery.prototype._getContainerSize = function() {
    // remove empty space from fit width
    var emptyWidth = 0;
    for ( var i=0, len = this.packer.spaces.length; i < len; i++ ) {
      var space = this.packer.spaces[i];
      if ( space.y === 0 && space.height === Number.POSITIVE_INFINITY ) {
        emptyWidth += space.width;
      }
    }

    return {
      width: this.fitWidth - this.gutter,
      height: this.maxY - this.gutter
    };
  };

  // always resize
  Packery.prototype.needsResizeLayout = function() {
    return true;
  };

  // Start baffle on any element(s).
  let b = baffle('.type').start();
  // Take care of some other stuff.
    $(function(){
        $(".type1").typed({
            strings: ["Full Stack Developer."],
            typeSpeed: 50,
            showCursor: false,
            startDelay: 1400
        }
      );
    });
    // Swap in new text and reveal over 1500ms.
    b.reveal(15000);
  $( function() {
    var $container = $('.grid').packery({
      itemSelector: '.grid-item',
      columnWidth: 350,
      gutter: 20
    });
  });
  $grid.packery( 'bindDraggabillyEvents', draggie );
  $grid.packery( 'bindUIDraggableEvents', $items );
  // layout Packery after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.packery();
  });

  // Message to Developers
  console.log("This site will be under a lot of work.");
  // Glitch
  function Glitch() {
    var canvas = document.getElementById('canvas')
      , context = canvas.getContext('2d')
      , img = new Image()
      , w
      , h
      , offset
      , glitchInterval;

    img.src = 'public/js/small_ps_logo.png';
    img.onload = function() {
      init();
    	window.onresize = init;
    };

    var init = function() {
      console.log('hi');
    	clearInterval(glitchInterval);
    	canvas.width = w = window.innerWidth - 20;
    	offset = w * .1;
    	canvas.height = h = 300;
    	glitchInterval = setInterval(function() {
    		clear();
    		context.drawImage(img,  (window.innerWidth / 2 - h / 2), (0), h, h);
    		setTimeout(glitchImg, randInt(3000, 10000));
    	}, 500);
    };

    var clear = function() {
      context.fillStyle="#0e0e0e";
      console.log(w);
    	context.rect(0, 0, w, h);
    	context.fill();
    };

    var glitchImg = function() {
    	for (var i = 0; i < randInt(1, 30); i++) {
    		var x = Math.random() * w;
    		var y = Math.random() * h;
    		var spliceWidth = w - x;
    		var spliceHeight = randInt(5, h / 3);
    		context.drawImage(canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
    		context.drawImage(canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
    	}
    };

    var randInt = function(a, b) {
    	return ~~(Math.random() * (b - a) + a);
    };
  }

});
// GlitchText
/*!
 * $ Simple glitching plugin
 * Author: Igor Brkic <igor@hyperglitch.com>
 * Version 0.0.1
 * Licensed under the MIT license
 */
(function($){
    $.fn.glitch = function(options) {
        var s = $.extend({
            bg: null,    // background color
            maxint: 1,     // max interval between glitchings
            minint: 1,      // min interval between glitchings
            maxglitch: 500,   // max number of twitches
            hshift: 3,      // max horizontal shift
            vshift: 3,      // max vertical shift
            direction: 'horizontal' // 'horizontal', 'vertical' or 'random'
        }, options);

        return this.each(function(){
            $t=$(this);
            $t.wrap('<span style="display:inline-block;position:relative">');
            var $s=$t.closest('span');
            var $c=$t.clone();
            var height=$t.height();
            var width=$t.width();

            if(s.bg===null){
                s.bg=$t.css('background-color');
            }

            $c.css({
                position: 'absolute',
                top:0,
                left:0,
                height: height,
                width: width,
                overflow: 'hidden',
                'background-color': s.bg
            });
            $s.append($c);
            var rnd=function(a){return Math.floor(Math.random()*(a+1));}
            var g = function(){
                var i;
                for(i=0;i<rnd(s.maxglitch)+1;i++){
                    setTimeout(function(){
                        var css, dir;
                        if(s.direction=='random') dir=Math.random()<0.5?'horizontal':'vertical';
                        else dir=s.direction;
                        if(dir=='vertical') css={top: rnd(s.vshift+1), width: rnd(Math.floor(width*0.8))+2, height:height};
                        else css={left: rnd(s.hshift+1), height: rnd(Math.floor(height*0.8))+2, width:width};
                        $c.css(css)
                    }, rnd(300));
                }
                setTimeout(function(){$c.css({left: 0, top:0})}, 300);
                setTimeout(g, (rnd((s.maxint-s.minint))+s.minint)*1000);
            }
            setTimeout(g, 3000);
        });
    }
})(jQuery);
// End Of GlitchText

// $(function(){
//   console.log('hi');
//     $(".type").typed({
//         strings: ["Paul Schoen"],
//         typeSpeed: 80,
//         showCursor: false
//     });
//
// });
// $(function(){
//     $(".type1").typed({
//         strings: ["Full Stack Developer."],
//         typeSpeed: 50,
//         showCursor: false,
//         startDelay: 1400
//     }
//   );
// });




$(function(){
  $("h1").glitch();
});
