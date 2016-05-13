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
                if(document.location.hash != hash) {
                    if(history.pushState) {
                        history.pushState(null, null, hash);
                    } else {
                        document.location.hash = hash;
                    }
                }
                return true;
            }
            return false;
            // }
        }

        /* function para adaptar o carousel responsivo */
        $('div.carousel[data-type="multi"] .carousel-item').each(function(){
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            for(var i=0;i<1;i++) {
                next=next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));
            }
        });

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            // if (scroll > 500) {
            //     $('.topbar').addClass('topbarFixo');
            // } else {
            //     $('.topbar').removeClass('topbarFixo');
            // }

            $(".xp_slide").each(function(){
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
        // on load
        selectMenu(document.location.hash);


        $("#contact").validate({
            submitHandler: function(form) {
                // disable form fields before send
                var formData = $(form).serialize();
                // console.log(formData);
                $(form).find("input, textarea").attr("disabled","disabled");
                $.ajax({
                    url:$(form).attr("action"),
                    data:formData,
                    dataType:'json',
                    method:'POST',
                    complete:function(data){
                        console.log(data);
                        data = data.responseJSON;
                        if(data.error == false){
                            alert("Seu email foi enviado com sucesso!")
                            $(form).trigger('reset');
                        } else {
                            alert("Ocorreu um erro ao enviar o email!")
                        }
                        $(form).find("input, textarea").attr("disabled",null);
                    }
                })
            }
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
