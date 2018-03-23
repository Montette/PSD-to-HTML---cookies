$(function () {


    var mainCarousel = $("#mainCarousel");
    var lemonCarousel = $("#lemonCarousel");
    
    
    function runCarousel(carouselID) {

    var carouselList = carouselID;
  

    var left = $(".carousel__arrow--left");
    var right = $(".carousel__arrow--right");   

    var inter = setInterval(changeSlide, 6000);

    function changeSlide() {
        carouselList.animate({
            'margin-left':'-100vw'
        }, 1000, moveFirstSlide);

    };
    
    function changeSlideLeft(){
         carouselList.css({
                'margin-left': '-100vw'
            })
            var firstItem = carouselList.find("li:first");
            var lastItem = carouselList.find("li:last");
            firstItem.before(lastItem);
            carouselList.animate({
                'margin-left': 0
            }, 1000);
    }

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({
            'margin-left': 0
        });
   }

    right.click(function () {
        if (!carouselList.is(':animated')) {
            changeSlide()
        }
    })

    
    left.click(function () {
        if (!carouselList.is(':animated')) {
            changeSlideLeft()
        }
    })

     };
    
    runCarousel(mainCarousel);
     runCarousel(lemonCarousel);
})
