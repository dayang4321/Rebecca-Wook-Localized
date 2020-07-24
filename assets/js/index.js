

$( document ).ready(function() {
    new WOW().init();
});
  
//Loading Fuction
window.onload = (event) => {
    document.getElementById("loading").style.display = "none";
}


$('.navbar-toggler').click(function () {
    $('#home-navbar').toggleClass('nav-expanded');
    $('#home-navbar').hasClass('nav-expanded') ? $('#brand-image').attr('src', 'assets/img/logo/RW-Logo-mobile.svg') : $('#brand-image').attr('src', 'assets/img/logo/RW Logo.svg');
  //  $('#brand-image').attr('src')==="assets/img/logo/RW Logo.svg"? $('#brand-image').attr('src','assets/img/logo/RW-Logo-mobile.svg'):$('#brand-image').attr('src','assets/img/logo/RW Logo.svg') ;
})


$(window).resize(function () {
    if (($(window).width() > 767) &&  ($('#home-navbar').hasClass('nav-expanded'))) {
        $('#brand-image').attr('src', 'assets/img/logo/RW Logo.svg');
        $('.navbar-toggler').click()
        console.log("Ooin")
    }
       }
)

$(window).scroll(function() {
    var hT = $('#stats-row').offset().top,
        hH = $('#stats-row').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        console.log('H1 on the view!');
        if ($('#stats-row').hasClass('counter-ran')) {
            return
        }
        else {
            console.log('counter on the view!');
            $('#stats-row').addClass('counter-ran');
            $('.stat').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
        ;
    }
 });