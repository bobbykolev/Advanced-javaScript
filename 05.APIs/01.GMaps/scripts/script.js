var map;
$(document).ready(function () {

    $('#maps-container').append('<div id="left-arrow"></div><div id="right-arrow"></div><div id="map-border" class="0"><div id="map"></div></div><nav id="maps-list-container"><ul id="maps-list"></ul></nav>');

    var MapClass = {
        init: function (data) {
            this.data = data
        },
        renderThumbs: function (selector) {
            this.selector = selector;
            for (var j = 0, len = this.data.length; j < len; j++) {
                $(this.selector).append('<li><h3>' + this.data[j].title + '</h3><img src="' + this.data[j].img + '" id="' + j + '"/></li>');
            }
        },
        renderMap: function (index) {
            
            function initialize() {
                this.index = index;
                var mapOptions = {
                    zoom: 12,
                    center: new google.maps.LatLng(listOfCapitalsData[this.index].lat, listOfCapitalsData[this.index].lon),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                $('#map').fadeOut(1);
                $('#map').fadeIn();
                map = new google.maps.Map(document.getElementById('map'),
                   mapOptions);
                var marker = new google.maps.Marker({
                    position: map.getCenter(),
                    map: map,
                    title: listOfCapitalsData[this.index].title
                });

                var infowindow = new google.maps.InfoWindow({
                    content: listOfCapitalsData[this.index].info
                });

                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(map, marker);
                    map.panTo(marker.getPosition());
                });
            }
            google.maps.event.addDomListener(window, 'load', initialize());
        }
    };

    var theMap = Object.create(MapClass);

    theMap.init(listOfCapitalsData);
    theMap.renderThumbs('#maps-list');
    theMap.renderMap(0);

    $('li>img').on('click', function () {
        var i = this.id;
        theMap.renderMap(i);
        $('#map-border').attr('class', i);
    });
    function next() {
        var i = $("#map-border").attr("class");
        if (i == listOfCapitalsData.length - 1) {
            i = -1;
        };
        theMap.renderMap(parseInt(i) + 1);
        $("#map-border").attr("class", parseInt(i) + 1)
    }
    function prev() {
        var i = $("#map-border").attr("class");
        if (i == 0) {
            i = listOfCapitalsData.length;
        };
        theMap.renderMap(parseInt(i) - 1);
        $("#map-border").attr("class", parseInt(i) - 1)
    }

    $("#left-arrow").on('click', prev);
    $("#right-arrow").on('click', next);

    $("#left-arrow").on('mousedown', function () {
        $("#left-arrow").css({ 'background': 'url(images/left_a.png)' });
    });
    $("#left-arrow").on('mouseup', function () {
        $("#left-arrow").css({ 'background': 'url(images/left.png)' });
    });
    $("#right-arrow").on('mousedown', function () {
        $("#right-arrow").css({ 'background': 'url(images/right_a.png)' });
    });
    $("#right-arrow").on('mouseup', function () {
        $("#right-arrow").css({ 'background': 'url(images/right.png)' });
    });
});

if (!Object.create) {
    Object.create = function (obj) {
        function f() { };
        f.prototype = obj;
        return new f();
    }
}