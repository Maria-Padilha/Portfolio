$('.fa-bars').click(function(){
    $('.navbar').toggleClass("slider");
    $('.fa-bars').toggleClass("fa-xmark");
})

$(window).scroll(function(){
    $('.navbar').removeClass("slider");
    $('.fa-bars').removeClass("fa-xmark");
})
