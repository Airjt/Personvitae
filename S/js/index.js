var swiper = new Swiper('.swiper-container',{
  hashNavigation: {
    watchState: true,
  },
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
  });
  $(".daohanglan a").click(function(){
    $(".navbar").hide();
  })
  // $(".qq").mouseover(function(){
  //   $(".qqer").fadeToggle();
  // })
  for(var i = 0 ; i < 4 ; i++){
    add(i);
  }
  function add(i){
    $(".btn"+i).click(function(){
      swiper.slideTo(i,1000,false)
   })
  }
})