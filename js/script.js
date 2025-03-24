theWeatherHouse = {
    initial: function() {
        //art
        $(".scene-1").fadeIn(1000).delay(2000).fadeOut(1000, function() {
            //logo first
            $(".scene-2").fadeIn(1000).delay(2000).fadeOut(1000, function() {
                
                //movie
                $(".scene-4").fadeIn(300, function() {
                    //logo and menu
                    $(".top-logo").delay(1500).fadeIn(300, function(){
                        var menuShow = setTimeout(function() {
                            $('.top-logo, a.menu-open').addClass('active');
                        }, 2000)
                    });
                });

                //area 1 film
                var darkFilmShow = setTimeout(function() {
                    $(".film-area1").delay(3000).fadeIn(1000, function() {
                        $('body').css('overflow', 'auto');
                    });
                }, 3000);
            });
        });
    },
    infoListShowHide: function() {
        $(".question").click(function(e) {
            e.preventDefault();
            var answer = $(this).next(".detail");
            $(".question").not(this).removeClass("active");
            
            $(".detail").not(answer).slideUp(300);
            $(this).toggleClass("active");
            answer.slideToggle(300);
        });
    },
    gnbMenuSlideBtn: function() {
        $('a.menu-open').on('click', function(e) {
            e.preventDefault();
            $('div.gnb-wrapper').addClass('on');
        });
        $('a.menu-close').on('click', function(e) {
            e.preventDefault();
            $('div.gnb-wrapper').removeClass('on');           
        });
    },
    moreBtnClick: function() {
        $('.more-now a').on('click', function(e) {
            e.preventDefault();
            let thisNum = $(this).data('num');
            $('div.content-detail-' + thisNum).fadeIn(500);
            $('body').css('overflow', 'hidden');

            if(thisNum == 1) {
                var contentDiv1 = new Swiper("#contentSwiper1", {
                    spaceBetween: 30,
                    effect: "fade",
                    autoplay: {
                      delay: 3500,
                    },
                });
            }
            else if(thisNum == 2) {
                var contentDiv2 = new Swiper("#contentSwiper2", {
                    spaceBetween: 30,
                    effect: "fade",
                    autoplay: {
                      delay: 3500,
                    },
                });
            }
            else if(thisNum == 3) {
                var contentDiv3 = new Swiper("#contentSwiper3", {
                    spaceBetween: 30,
                    effect: "fade",
                    autoplay: {
                      delay: 3500,
                    },
                });
            }
            else if(thisNum == 4) {
                var contentDiv4 = new Swiper("#contentSwiper4", {
                    spaceBetween: 30,
                    effect: "fade",
                    autoplay: {
                      delay: 3500,
                    },
                });
            }
            else if(thisNum == 5) {
                var contentDiv4 = new Swiper("#contentSwiper5", {
                    spaceBetween: 30,
                    effect: "fade",
                    autoplay: {
                      delay: 3500,
                    },
                });
            }
            theWeatherHouse.goBackClick();
        });
    },
    goBackClick: function() {
        $('.go-back').on('click', function(e) {
            e.preventDefault();
            $('div.subcontent').fadeOut(500);
            theWeatherHouse.goBackClick();
            $('body').css('overflow', 'auto');

            contentDiv1.destroy();
            contentDiv2.destroy();
            contentDiv3.destroy();
            contentDiv4.destroy();
            contentDiv5.destroy();
        });        
    },
    isFilmShow : false,
}

function goToSlide(index) {
    swiper.slideToLoop(index);  // loop 모드일 때 사용
}

$(document).ready(function() {
    //intro 
    theWeatherHouse.initial();
    theWeatherHouse.infoListShowHide();
    theWeatherHouse.gnbMenuSlideBtn();
    theWeatherHouse.moreBtnClick();
});

window.addEventListener('scroll', function() {
    const area1 = document.querySelector('.area-1');
    const area2 = document.querySelector('.area-2');
    const area3 = document.querySelector('.area-3');
    const area4 = document.querySelector('.area-4');
    const area5 = document.querySelector('.area-5');
    const area6 = document.querySelector('.area-6');
    const area7 = document.querySelector('.area-7');
    const section1Top = area1.getBoundingClientRect().top;
    const section2Top = area2.getBoundingClientRect().top;
    const section3Top = area3.getBoundingClientRect().top;
    const section4Top = area4.getBoundingClientRect().top;
    const section5Top = area5.getBoundingClientRect().top;
    const section6Top = area6.getBoundingClientRect().top;
    const section7Top = area7.getBoundingClientRect().top;
    
    if (section1Top <= 0) {

    } else {

    }
    if (section2Top <= 0) {
        $('.section-2').css('display', 'block');
        $('div.area-2 div.inner').addClass('on');
        $(".film-area2").fadeIn(800);
        /*
        if(theWeatherHouse.isFilmShow == false) {
            $(".film-area2").fadeIn(500);
            theWeatherHouse.isFilmShow = true;
        }
        */
    } else {
        $('.section-2').css('display', 'none');
        $('div.area-2 div.inner').removeClass('on');
        $(".film-area2").fadeOut(500);
    }
    if (section3Top <= 0) {
        
        $('.section-3').fadeIn(800, function() {
            $(".film-area3").fadeIn(800, function() {
                //$('body').css('overflow', 'auto');
            });
        });
    } else {
        $('.section-3').fadeOut(500);
        $(".film-area3").fadeOut(500);
    }
    if (section4Top <= 0) {
        $('.section-4').fadeIn(800, function(){
            $(".film-area4").fadeIn(800);
        });
    } else {
        $('.section-4').fadeOut(500);
        $(".film-area4").fadeOut(500);
    }
    if (section5Top <= 0) {
        $('.section-5').fadeIn(800, function() {
            $(".film-area5").fadeIn(800);
        });
    } else {
        $('.section-5').fadeOut(500);
        $(".film-area5").fadeOut(500);
    }
    if (section6Top <= 0) {
        $('.section-6').fadeIn(800, function() {
            $(".film-area6").fadeIn(800);
        });
    } else {
        $('.section-6').fadeOut(500);
        $(".film-area6").fadeOut(500);
    }
    if (section7Top <= 0) {
        $('.section-7').fadeIn(500);
    } else {
        $('.section-7').fadeOut(500);
    }
});