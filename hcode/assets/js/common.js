
// mobile visual swiper

(function(){
    var navTop = $('.nav').offset().top;

    $(window).scroll(function() {
        var st = $(this).scrollTop();
        if (st > navTop) {
            $('.nav').addClass('fixnav');
            $('.chat').addClass('navfix');
        }
        if (st < navTop) {
            $('.nav').removeClass('fixnav');
            $('.chat').removeClass('navfix');
        }
    });
})();

$(document).ready(function(){

    $('.slide02').slick({
        centerMode: false,
        variableWidth: true,
        infinite:false,
        dots:false,
        arrows:false,
        draggable:true
    });
    $('.slide03').slick({
        centerMode: false,
        variableWidth: true,
        infinite:false,
        dots:false,
        arrows:false,
        draggable:true
    });
    $('.slide04').slick({
        centerMode: false,
        variableWidth: true,
        infinite:true,
        dots:false,
        arrows:false,
        draggable:true
    });

    // visual slide
    var time = 2;
    var $bar,
        $slick,
        isPause,
        tick,
        percentTime;
    
    $slick = $('.slide_normal');
    $slick.slick({
        draggable: true,
        adaptiveHeight: false,
        dots: true,
        infinite:true,
        dotsClass:'slide_number',
        mobileFirst: true,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return (i+1) + '<div class="page_number">2</div>' ;
        }
    });
    

    $bar = $('.slider-progress .progress');

    $('.visual').on({
        mouseenter: function() {
        isPause = true;
        },
        mouseleave: function() {
        isPause = false;
        }
    })
        
    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }
    
    function interval() {
        if(isPause === false) {
        percentTime += 1 / (time+0.1);
        $bar.css({
            width: percentTime+"%"
        });
        if(percentTime >= 100)
            {
            $slick.slick('slickNext');
            startProgressbar();
            }
        }
    }
        
        
    function resetProgressbar() {
        $bar.css({
        width: 0+'%' 
        });
        clearTimeout(tick);
    }
    
    startProgressbar();
    
});
    
