(function($) {
  $.fn.flyin = function(options) {
    // TODO: Determine all the defaults for flyin parameters
    var defaults = {
     direction : 'false',
     spin : 'false',
     fade : 'false'
    }
    var options = $.extend({}, defaults, options);
    return this.each(function() {

      var flyingobject = $(this)
      var flyingobjectHeight = flyingobject.height();
      var flyingobjectWidth = flyingobject.width();
      var flyingobjectOffset = flyingobject.offset();

      $(window).scroll(function() {

        var scroll = window.pageYOffset;
        var flyingobjectPosition = -($(window).height()/2) + (flyingobjectOffset.top + flyingobjectHeight/2) - scroll;
        var flyingobjectRotation = 360-(scroll/(-($(window).height()/2) + (flyingobjectOffset.top + flyingobjectHeight/2))*360);

        // Depending on flyingobjectPosition and flyingobjectRotataion, determine where to place or how to spin
        var flyingobjectPlacement;
        var flyingobjectSpin;

        // If the user is scrolled to the object placement on the screen, flyin should be finished.
        if(flyingobjectPosition<=0){
         flyingobjectPlacement=0;
         flyingobjectSpin=0;
        }
        // Or keep on flyin
        else{
         flyingobjectPlacement=flyingobjectPosition;
         flyingobjectSpin=flyingobjectRotation;
        }

        //Handle the placment of the objects on the screen
        if(options.direction=='false'){
          // do nothing
        } else if(options.direction=='left'){
         flyingobject.css({
           "left" : flyingobjectPlacement+"px"
         });
        } else if(options.direction=='right'){
         flyingobject.css({
           "right" : flyingobjectPlacement+"px"
         });
        }

        //Handle the spin of the objects on the screen
        if(options.spin=='false'){
         flyingobject.css({
           "-webkit-transform" : "none",
           "-moz-transform" : "none",
           "transform" : "none"
        });
        } else if(options.spin=='left'){
         flyingobject.css({
           "-webkit-transform" : "rotate("+flyingobjectSpin+"deg)",
           "-moz-transform" : "rotate("+flyingobjectSpin+"deg)",
           "transform" : "rotate("+flyingobjectSpin+"deg)",
           "-webkit-transform-origin" : "0% "+flyingobjectWidth*4+"px"
         });
        } else if(options.spin=='right'){
         flyingobject.css({
           "-webkit-transform" : "rotate(-"+flyingobjectSpin+"deg)",
           "-moz-transform" : "rotate(-"+flyingobjectSpin+"deg)",
           "transform" : "rotate(-"+flyingobjectSpin+"deg)",
           "-webkit-transform-origin" : flyingobjectWidth*4+"px "+flyingobjectWidth*4+"px"
         });
        }
      });
    });
  }
})(jQuery);
