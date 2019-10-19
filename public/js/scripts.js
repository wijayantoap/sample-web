$(document).ready(function(){
    const notifCookie = $.cookie("notif_cookie");
    const panelCookie = $.cookie("panel_cookie");

    if(!notifCookie) {
        $(".notification").css('display', 'flex')
    }

    $(".notification__button").click(function(){
        $(".notification").slideUp();
        $.cookie("notif_cookie", "foo")
    });    

    if(!panelCookie) {
        $(document).scroll(function() {
            var yAxis = $(this).scrollTop();
            if (yAxis > 300) {
            $(".panel").fadeIn();
            }
        });
    }

    $(".panel__close, .panel__button").click(function(event){
        event.preventDefault();
        $(".panel").slideUp();
        const date = new Date(Date.now() + (10 * 60 * 1000));
        $.cookie("panel_cookie", "foo", { expires: date });
    });
});