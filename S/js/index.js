var swiper = new Swiper('.swiper-container',{
  mousewheel: true,
  // slide 地址
  // hashNavigation: {
  //   watchState: true,
  // },
  autoplay:false,
  direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
      
    });
$(document).ready(function(){
  // 导航栏动画效果
  $(".openbtn").click(function(){
    $(".navbar").animate({width:'toggle'},350);
  });
  $(".daohanglan a").click(function(){
    $(".navbar").hide();
  })
  // $(".qq").mouseover(function(){
  //   $(".qqer").fadeToggle();
  // })

  // 导航栏监听事件
  for(var i = 0 ; i < 4 ; i++){
    add(i);
  }
  function add(i){
    $(".btn"+i).click(function(){
      swiper.slideTo(i,1000,false)
   })
  }

  // 音乐图片效果
  var flag = true;
  $(".musicbtn").mouseover(function(){
    
    if(flag){
      $(this).find('span').eq(0).css('display','block');
      flag = !flag;
    }else{
      $(this).find('span').eq(1).css('display','block');
      flag = !flag;
    }
    
  })
})