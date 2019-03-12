var swiper = new Swiper('.swiper-container',{
  autoplay:false,
  direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
      
    });
$(document).ready(function(){
  $(".openbtn").click(function(){
    $(".navbar").animate({width:'toggle'},350);
  })
})