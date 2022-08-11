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
$(window).scroll(function(){
				var	windowTop =$(window).scrollTop() +50;
				$("#quick").stop().animate({top:windowTop+"px" },500);
				//$("#q_mn").stop().animate({속성:"속성값", 속성:"속성값" },1000);	
				
});

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
  
  $('#TOP').click(function () {
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
