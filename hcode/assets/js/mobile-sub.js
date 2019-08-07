$(document).ready(function() {
  
  var slickOpt = {
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    infinite: false,
    speed: 500
  }
  $('.main_slide').slick(slickOpt);
  // $('.main_slide').on('afterChange', function(event, slick, direction) {
  //   console.log('change!')
  // });

  var prdSlide = new Swiper('.prd_slide', {
    initialSlide: 1,
    effect: 'cube',
    grabCursor: true,
    autoHeight: true,
    cubeEffect: {
      shadow: false,
      slideShadows: false,
    },
    on: {
      init: function() {
        if (prdSlide !== undefined) {
          showText();
        }
      },
      slideChange: function() {
        var curSlide = this.activeIndex;
        var target = this.$el;
        var video = $(target).find('video');
        var subSlide = $(target).find('.sub_slide');
        var icoArr = $(target).find('.ico_arr');
    
        if (prdSlide !== undefined) {
          showText();
        }

        if (curSlide === 2) {
          video.get(0).load();
          video.get(0).play();
          
        } else {
          icoArr.removeClass('hide');
          subSlide.removeClass('moved');
          video.get(0).load();
          video.get(0).play();
        }
      }
    }
  });

  function showText() {
    var firstSlideIdx = prdSlide[0].activeIndex; 
    var secondSlideIdx = prdSlide[1].activeIndex; 

    return firstSlideIdx === 1 && secondSlideIdx === 1 ? $('.main_slide').slick('slickSetOption', 'swipe', true) : $('.main_slide').slick('slickSetOption', 'swipe', false);
  }

  var subSlide = new Swiper('.sub_slide', {
    slidesPerView: 1.1,
    spaceBetween: 32,
    slidesOffsetBefore: -28,
    slidesOffsetAfter: 28,
    nested: true
  });

  $('.touch_layer').on('swipeup', function() {
    $(this).siblings('.sub_slide').addClass('moved');
    $(this).siblings('.ico_arr').addClass('hide');
  });
  $('.ico_arr').on('swipeup', function() {
    $(this).addClass('hide');
    $(this).prev('.sub_slide').addClass('moved');
  });
  $('.sub_slide').on('swipeup', function(e) {
    $(this).next('.ico_arr').addClass('hide');
    $(this).addClass('moved');
  });

  $('.btn_plus').on('mouseenter mouseleave', function(e) {
    var idx = $(this).index();
    $(this).toggleClass('on');
    $(this).closest('.tool_btns').next('.tool_layers').find('.img_txt').eq(idx).toggleClass('on');

   
    (e.type == 'mouseenter') ? $('.tool_layers').show() : $('.tool_layers').hide();
    return false;
    
  });

  (function() {
    $('#prd1_sel01').on('change', function() {
      $('.main_slide').slick('slickGoTo', 1, true);
      prdSlide[1].slideTo(0, false);
      prdSlide[0].slideTo(1, false);

      $(this).val(0);
    });
    $('#prd1_sel02').on('change', function() {
      $('.main_slide').slick('slickGoTo', 1, true);
      prdSlide[1].slideTo(2, false);
      prdSlide[0].slideTo(1, false);

      $(this).val(0);
    });
    $('#prd1_sel03').on('change', function() {
      $('.main_slide').slick('slickGoTo', 1, true);
      prdSlide[1].slideTo(3, false);
      prdSlide[0].slideTo(1, false);
      $(this).val(0);
    });

    $('#prd2_sel01').on('change', function() {
      $('.main_slide').slick('slickGoTo', 0, true);
      prdSlide[0].slideTo(0, false);
      prdSlide[1].slideTo(1, false);      
      $(this).val(0);
    });
    $('#prd2_sel02').on('change', function() {
      $('.main_slide').slick('slickGoTo', 0, true);
      prdSlide[0].slideTo(2, false);
      prdSlide[1].slideTo(1, false);      
      $(this).val(0);
    });
    $('#prd2_sel03').on('change', function() {
      $('.main_slide').slick('slickGoTo', 0, true);
      prdSlide[0].slideTo(3, false);
      prdSlide[1].slideTo(1, false);      
      $(this).val(0);
    });
  })();
});