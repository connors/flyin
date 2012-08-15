(function($) {

 $.fn.flyin = function(options) {

   var defaults = {
     direction : 'false',
     spin : 'false'
   }

   var options = $.extend({}, defaults, options);
   return this.each(function() {

     var flyingobject = $(this)
     var flyingobjectHeight = flyingobject.height();
     var flyingobjectOffset = flyingobject.offset();

     $(window).scroll(function() {

       var scroll = window.pageYOffset;
       var flyingobjectPosition = -($(window).height()/2) + (flyingobjectOffset.top + flyingobjectHeight/2) - scroll;
       var flyingobjectRotation = 360-(scroll/(-($(window).height()/2) + (flyingobjectOffset.top + flyingobjectHeight/2))*360);
       var flyingobjectPlacement;
       var flyingobjectSpin;

       if(flyingobjectPosition<=0){
         flyingobjectPlacement=0;
         flyingobjectSpin=0;
       }
       else{
         flyingobjectPlacement=flyingobjectPosition;
         flyingobjectSpin=flyingobjectRotation;
       }
       //Handle the placment of the objects on the screen
       if(options.direction=='false'){
         flyingobject.css({
       });
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
           "transform" : "rotate("+flyingobjectSpin+"deg)"
         });
       } else if(options.spin=='right'){
         flyingobject.css({
           "-webkit-transform" : "rotate(-"+flyingobjectSpin+"deg)",
           "-moz-transform" : "rotate(-"+flyingobjectSpin+"deg)",
           "transform" : "rotate(-"+flyingobjectSpin+"deg)"
         });
       }
     });
   });
 }
})(jQuery);
