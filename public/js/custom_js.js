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
$grid.packery( 'bindDraggabillyEvents', draggie )
$grid.packery( 'bindUIDraggableEvents', $items )


// Message to Developers
console.log("This site will be under a lot of work.")
