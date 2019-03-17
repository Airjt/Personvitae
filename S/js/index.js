var swiper = new Swiper('.swiper-container', {
  mousewheel: true,
  // slide 地址
  // hashNavigation: {
  //   watchState: true,
  // },
  autoplay: false,
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});
$(document).ready(function () {
  // 导航栏动画效果
  $(".openbtn").click(function () {
    $(".navbar").animate({ width: 'toggle' }, 350);
  });
  $(".daohanglan a").click(function () {
    $(".navbar").hide();
  })
  // $(".qq").mouseover(function(){
  //   $(".qqer").fadeToggle();
  // })

  // 导航栏监听事件
  for (var i = 0; i < 4; i++) {
    add(i);
  }
  function add(i) {
    $(".btn" + i).click(function () {
      swiper.slideTo(i, 1000, false)
    })
  }

  // 音乐图片效果
  var flag = true;
  var a = 0;
  $(".musicbtn").click(function () {
    if (flag) {
      $(this).find('span').eq(0).css('display', 'block');
      $(this).find('span').eq(1).css('display', 'none');
      flag = !flag;
      a=1;
    } else {
      $(this).find('span').eq(1).css('display', 'block');
      $(this).find('span').eq(0).css('display', 'none');
      flag = !flag;
      a=0;
    }
  })
  $(".musicbtn").mouseout(function () {
    $(this).find('span').hide();
  })
  $(".musicbtn").mouseover(function () {
   
    if (a == 1) {
      $(this).find('span').eq(0).css('display', 'block');
    } else if(a == 0) {
      $(this).find('span').eq(1).css('display', 'block');
    }
  })

})