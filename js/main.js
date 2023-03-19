$(window).on("load", function () {
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;

    function slideShow() {
        $(".slide").removeClass("active").eq(slideIndex).addClass("active")
        if (slideIndex === slideLen - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        setTimeout(slideShow,5000)
    }
    slideShow()

    const wHeight = $(window).height();
    $(".gallery-popup img").css("max-height",wHeight + "px" );
    let itemIndex=0;
    const totalGalleryItem= $(".gallery-item").length;
    $(".gallery-item").click(function (){
        itemIndex=$(this).index();
        $(".gallery-popup").addClass("open")
        $(".gallery-popup .gp-img").hide()
        gpSlideShow()
    })
    $(".gp-controls .next").click(function (){
        if(itemIndex === totalGalleryItem-1){
            itemIndex=0;
        }
        else {
            itemIndex++;
        }
        $(".gallery-popup .gp-img").fadeOut(function (){
            gpSlideShow();
        })
    })
    $(".gp-controls .prev").click(function (){
        if(itemIndex === 0){
            itemIndex=totalGalleryItem-1;
        }
        else {
            itemIndex--;
        }
        $(".gallery-popup .gp-img").fadeOut(function (){
            gpSlideShow();
        })
    })
    function gpSlideShow(){
        const imgSrc= $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
        $(".gallery-popup .gp-img").fadeIn().attr("src",imgSrc);
        $(".gp-counter").text((itemIndex+1) +"/"+ totalGalleryItem)
    }
    $(".gp-close").click(function (){
        $(".gallery-popup").removeClass("open");
    })
    $(".gallery-popup").click(function (event){
        if($(event.target).hasClass("open")){
            $(".gallery-popup").removeClass("open");
        }
    })
})
$(document).ready(function (){

    $(".hamburger-btn").click(function (){
        $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function (){
        if($(window).width()< 768 ){
            $(".header .nav").slideToggle()
        }
    })
    $(window).scroll(function (){
        if($(this).scrollTop()>100){
            $(".header").addClass("fixed")
        }
        else {
            $(".header").removeClass("fixed")
        }
    })
    $.scrollIt({
        topOffset: -50
    });
});
$(document).ready(function() {
    var audio = $("#myAudio")[0];

    $('#main-content').click(function() {
        $('#overlay').fadeIn();
    });

    $('#overlay').click(function() {
        $("#overlay").removeClass("overlay")
        $("#overlay").addClass("none")
        audio.play();
        $(this).fadeOut();
    });
});
