// topbar fixo com scroll

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 500) {
        $('.topbar').addClass('topbarFixo');
    } else {
        $('.topbar').removeClass('topbarFixo');
    }
});

(function($){

    $(window).ready(function(){
        var currentHash = document.location.hash;
        if(currentHash && currentHash != "undefined"){

        }
        var menuContainer = $("nav").find(".navbar-nav");
        var selectMenu = function(hash){
            $(menuContainer).find("li").removeClass("active");
            $(menuContainer).find("li").find("a[href="+hash+"]").parent("li").addClass("active");
        }
        $(window).on('hashchange', function(e) {
            selectMenu(document.location.hash);
        });
    });
})(jQuery)




















// (function () {
   // var topbar = document.getElementById('topbar'); // colocar em cache
    // window.addEventListener('scroll', function () {
       // if (window.scrollY > 0) menu.classList.add('topbarFixo'); // > 0 ou outro valor desejado
       // else menu.classList.remove('topbarFixo');
    // });
// })();
