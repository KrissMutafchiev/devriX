// Main object for UI modify or manipulation

let widgetUI = {

    openSideNav : (sideNav , mainElement ,height ) => {

        let widget = this;

        document.getElementById(sideNav).style.width = "250px";
        document.getElementById(sideNav).style.top = height + 'px';
        document.getElementById(sideNav).style.height = $('.content-box').height() - height + "px";
        document.getElementById(mainElement).style.marginRight = "250px";

        $('.fog-element').css(
            {
                'top':height,
                'right':'250px',
                'width':$('.content-box').width() - 250 + 'px',
                'height' : $('.content-box').height() - height + "px"
            });

    },

    closeNav : (sideNav , mainElement ) => {

        document.getElementById(sideNav).style.width = "0";
        document.getElementById(mainElement).style.marginRight= "0";

        $('.fog-element').css(
            {
                'top': 0,
                'right':'0px',
                'width':'0px',
                'height' : '0px'
            });
    },

    getHightHeader: (element) => {
        let height = $(element).height()
        return height
    },

    googleMap : () => {

        let mapProp= {
            center: new google.maps.LatLng(51.508742,-0.120850),
            zoom: 5,
        };

        let map = new google.maps.Map(document.getElementById("googleModal"),mapProp);

    }

};
