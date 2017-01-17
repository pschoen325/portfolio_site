$(document).ready(function () {
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
  var canvas = document.getElementById('canvas')
    , context = canvas.getContext('2d')
    , img = new Image()
    , w
    , h
    , offset
    , glitchInterval;

  img.src = 'http://i.imgur.com/K82nzj8.png';
  img.onload = function() {
    init();
  	window.onresize = init;
  };

  var init = function() {
  	clearInterval(glitchInterval);
  	canvas.width = w = window.innerWidth;
  	offset = w * .1;
  	canvas.height = h = ~~(175 * ((w - (offset * 2)) / img.width));
  	glitchInterval = setInterval(function() {
  		clear();
  		context.drawImage(img, 500, 500, img.width, 500, offset, 0, w - (offset * 2), h);
  		setTimeout(glitchImg, randInt(250, 250));
  	}, 500);
  };

  var clear = function() {
  	context.rect(0, 0, w, h);
  	context.fill();
  };

  var glitchImg = function() {
  	for (var i = 0; i < randInt(1, 13); i++) {
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
        strings: ["Full Stack Developer."],
        typeSpeed: 50,
        showCursor: false,
        startDelay: 1400
    });
});
