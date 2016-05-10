// topbar fixo com scroll
(function($){

    $(window).ready(function(){
        var menuContainer = $("nav").find(".navbar-nav");
        var topMenuHeight = $('.navbar.navbar-fixed-top').height();
        var selectMenu = function(hash){
            if(!hash || hash == "undefined") hash = "#home";
            $(menuContainer).find("li").removeClass("active");
            var toSelect = $(menuContainer).find("li").find("a[href="+hash+"]");
            if(toSelect.size() > 0){
                $(toSelect).parent("li").addClass("active");
                return true;
            }
            return false;
            // }
        }

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            // if (scroll > 500) {
            //     $('.topbar').addClass('topbarFixo');
            // } else {
            //     $('.topbar').removeClass('topbarFixo');
            // }

            $(".slide").each(function(){
                // console.log($(this).find("h2").eq(0).offset());
                var padding = parseInt($(this).css("padding-bottom"));
                var height = parseInt($(this).height());
                var position = parseInt($(this).offset().top);
                var endPoint = padding + height + position;

                var visible = (endPoint - scroll - topMenuHeight) > 0 ? true : false;
                if(visible){
                    var elementId = $(this).attr("id");
                    // if found a valid menu item
                    if(selectMenu("#"+elementId))
                        return false;
                }

            });
        });

        $(window).on('hashchange', function(e) {
            selectMenu(document.location.hash);
        });
        selectMenu(document.location.hash);
    });
})(jQuery)




















// (function () {
   // var topbar = document.getElementById('topbar'); // colocar em cache
    // window.addEventListener('scroll', function () {
       // if (window.scrollY > 0) menu.classList.add('topbarFixo'); // > 0 ou outro valor desejado
       // else menu.classList.remove('topbarFixo');
    // });
// })();
