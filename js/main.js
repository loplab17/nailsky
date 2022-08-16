/*test*/
var swiper = new Swiper(".nail", {
  slidesPerView: 'auto',
  spaceBetween: 20,
    autoplay:{
    delay: 2200,
    disableOnInteraction: false,
  },
  centerSlidemode:true,

        // loop: true,
        // loopAdditionalSlides : 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
  },
        
          breakpoints: {
    640: {
         slidesPerView: 'auto',

    },
    768: {
      slidesPerView: 'auto',
    },
    1024: {
      slidesPerView:'auto',
    }
        }
});
      
/*test*/ 
var swiper = new Swiper(".pedi", {
  slidesPerView:'auto',
  spaceBetween: 20,
  centerSlidemode:true,
        autoplay:{
        delay: 2200,
        disableOnInteraction: false,
      },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
  },
  breakpoints: {
    640: {
            slidesPerView:'auto',
    },
    768: {
      slidesPerView: 'auto',
    },
    1024: {
      slidesPerView: 'auto',
    }
        }
      });
  

/*스와이퍼 슬라이드 마우스 오버시 멈춤효과 */ 
$('.swiper-slide').hover(function(){
  swiper.autoplay.stop();
}, function(){
  swiper.autoplay.start();
});


/*가격 전체보기 버튼*/
$(function(){

    var sta = 0;
  $('.more').click(function () {
      if (sta == 0) {
      $('.all').slideDown(300);
      $('.more_txt').text('접기');
        $('#more_ic').attr( 'src','img/up_arrow.png');
      sta = 1
      }
      else {
      $('.all').slideUp(300);
      $('.more_txt').text('전체 가격보기');
      $('#more_ic').attr('src','img/down_arrow.png' );
      sta = 0
      }//slideup down
    })//click

})//ready




// 퀵메뉴 스크롤


$(window).resize(function(){ 
if (window.innerWidth > 501) {  // 다바이스 크기가 500초과일때

  $(window).scroll(function () {
    var windowTop = $(window).scrollTop() + 400;
    /*TOP으로부터 얼마나 떨어져있는지, 숫자 높을수록 객체가 아래로 내려감 */
    $("#quick").stop().animate({ top: windowTop + "px" }, 400);
  })

} else {
  $(window).scroll(function () {
    var windowTop = $(window).scrollTop() + 0;
    /*TOP으로부터 얼마나 떨어져있는지, 숫자 높을수록 객체가 아래로 내려감 */
    $("#quick").stop();
  });
}

}).resize(); 



//메뉴 클릭시 섹션으로 워프 
$(function () {
  $('nav ul li:nth-child(1)').click(function () {
    var offset = $('#main').offset();
  $('html').animate({ scrollTop: offset.top }, 400);
  });
  
  $('nav ul li:nth-child(2)').click(function () {
    var offset = $('#sec_02').offset();
   //선택한 태그의 위치를 반환
   //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
  $('html').animate({ scrollTop: offset.top }, 400);
  });
  $('nav ul li:nth-child(3)').click(function () {
    var offset = $('#sec_03').offset();
  $('html').animate({ scrollTop: offset.top }, 400);
    });
  
   $('nav ul li:nth-child(4)').click(function () {
    var offset = $('#sec_05').offset();
  $('html').animate({ scrollTop: offset.top }, 400);
   });
  
  $('.TOP').click(function () {
    var offset = $('#main').offset();
  $('html').animate({ scrollTop: offset.top }, 400);
  });
});


//스크롤 + 헤더 색상 변경
   $(window).on('scroll',function(){
                if($(window).scrollTop()){
                    $('#header').addClass('active');
                }else{
                    $('#header').removeClass('active');
                }
   });
            
      // $(window).on('scroll',function(){
      //           if($(window).scrollTop()){
      //               $('#quick_m_wrap').removeClass('active');
      //           }else{
      //               $('#quick_m_wrap').addClass('active');
      //           }
      //       });

// 모바일버전 퀵버튼1
$(function () {
  var quick_m = 0;
  $('#quick_m .open').click(function () {
    if (quick_m == 0) {
      $(this).css({ transform:'rotate(405deg)'});
      $('#quick_m .bt1').animate({top:'-70px'}, 500);
      quick_m = 1;

    } else {
      $(this).css({ transform:'rotate(0deg)'});
      $('#quick_m .bt1').animate({top:'0px'}, 500);
      quick_m = 0;
    }
  })//click
})//ready

// 모바일버전 퀵버튼2
$(function () {
  var quick_m = 0;
  $('#quick_m .open').click(function () {
    if (quick_m == 0) {
      $(this).css({ transform:'rotate(405deg)'});
      $('#quick_m .bt2').animate({top:'-140px'}, 500);
      quick_m = 1;

    } else {
      $(this).css({ transform:'rotate(0deg)'});
      $('#quick_m .bt2').animate({top:'0px'}, 500);
      quick_m = 0;
    }
  })//click
})//ready

// 모바일버전 퀵버튼3
$(function () {
  var quick_m = 0;
  $('#quick_m .open').click(function () {
    if (quick_m == 0) {
      $(this).css({ transform:'rotate(405deg)'});
      $('#quick_m .bt3').animate({top:'-210px'}, 500);
      quick_m = 1;

    } else {
      $(this).css({ transform:'rotate(0deg)'});
      $('#quick_m .bt3').animate({top:'0px'}, 500);
      quick_m = 0;
    }
  })//click
})//ready
