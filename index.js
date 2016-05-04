// topbar fixo com scroll

$(window).scroll(function() { 
    var scroll = $(window).scrollTop();
 
    if (scroll > 500) {
        $('.topbar').addClass('topbarFixo');
    } else {
        $('.topbar').removeClass('topbarFixo');
    }
});




















// (function () {
   // var topbar = document.getElementById('topbar'); // colocar em cache
    // window.addEventListener('scroll', function () {
       // if (window.scrollY > 0) menu.classList.add('topbarFixo'); // > 0 ou outro valor desejado
       // else menu.classList.remove('topbarFixo');
    // });
// })();
