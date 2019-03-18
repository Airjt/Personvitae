var swiper = new Swiper('.swiper-container', {
  on:{
    init: function(){
      swiperAnimateCache(this); //隐藏动画元素 
      swiperAnimate(this); //初始化完成开始动画
    }, 
    slideChangeTransitionEnd: function(){ 
      swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
    } 
  },
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
  // 暂停效果
  var musicaudio = document.getElementById("musicaduio");
  // 音乐图片效果
  var flag = true;
  var a = 0;
  $(".musicbtn").click(function () {
    if (flag) {
      $(this).find('span').eq(1).css('display', 'block');
      $(this).find('span').eq(0).css('display', 'none');
      flag = !flag;
      a = 1;
      musicaudio.pause();
    } else {
      $(this).find('span').eq(0).css('display', 'block');
      $(this).find('span').eq(1).css('display', 'none');
      flag = !flag;
      a = 0;
      musicaudio.play();
    }
  })
  $(".musicbtn").mouseout(function () {
    $(this).find('span').hide();
  })
  $(".musicbtn").mouseover(function () {

    if (a == 1) {
      $(this).find('span').eq(1).css('display', 'block');
    } else if (a == 0) {
      $(this).find('span').eq(0).css('display', 'block');
    }
  })
})