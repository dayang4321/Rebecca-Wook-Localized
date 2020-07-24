

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

