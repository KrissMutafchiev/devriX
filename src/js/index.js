$( document ).ready(function() {

    //Event's Register

    $('.burger-btn').on('click', function () {

        if( $(this).hasClass('active') ) {
            $(this).removeClass('active');
            widgetUI.closeNav('mySidenav','main-container');
        }else {
            $(this).addClass('active');
            widgetUI.openSideNav('mySidenav','main-container',widgetUI.getHightHeader('header'));

        }

    });

    $('.map-btn').on('click',function () {
        widgetUI.googleMap()
    })

});