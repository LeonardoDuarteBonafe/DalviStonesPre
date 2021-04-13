var height = $('.logo').height();
    
$(window).scroll(function(){
   if($(this).scrollTop() > height) {
    $('.menu-bar').addClass('fixed');
    }
    else{
        $('.menu-bar').removeClass('fixed');
      }
});