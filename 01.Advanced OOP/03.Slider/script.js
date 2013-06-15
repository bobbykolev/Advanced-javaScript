$(document).ready(function () {

    var addThumbs = {
    init: function(paths) {
        this.paths = paths;
        for (var j = 0, len=this.paths.length; j < len; j++) {
            $('#thumbs-list').append('<li><img src="'+this.paths[j]+'"></li>');
        }
    }
};

 //the thumbnais initializing
    var thePaths = Object.create(addThumbs);
    var inputArr = ["images/strawberries.png", 
                    "images/papaya.png", 
                    "images/figs.png", 
                    "images/cherries.png", 
                    "images/cherries-red.png", 
                    "images/kiwis.png", 
                    "images/apples.png"];
    thePaths.init(inputArr);

    $('li').on('click', function () {
        var rel = $(this).find('img').attr('src');
        $("#slide-img").attr("src", rel);
    });

    var srcArray = inputArr;
    var i = 0;
    var l = srcArray.length;

    $("#left-arrow").on('click', next);

    $("#right-arrow").on('click', prev);

    function next() {

        var index = srcArray.indexOf($("#slide-img").attr("src"));
        if (index == 0) {
            index = l
        };
        $("#slide-img").attr("src", srcArray[index - 1]);
    }
    function prev() {
        var index = srcArray.indexOf($("#slide-img").attr("src"));
        if (index == l - 1) {
            index = -1
        };
        $("#slide-img").attr("src", srcArray[index + 1]);
    }

    $("#left-arrow").on('mousedown', function() {
    $("#left-arrow").css({'background': 'url(images/left_a.png)'});
});
    $("#left-arrow").on('mouseup', function() {
    $("#left-arrow").css({'background': 'url(images/left.png)'});
});
    $("#right-arrow").on('mousedown', function() {
    $("#right-arrow").css({'background': 'url(images/right_a.png)'});
});
    $("#right-arrow").on('mouseup', function() {
    $("#right-arrow").css({'background': 'url(images/right.png)'});
});
    setInterval(prev, 4000);

});


if (!Object.create) {
  Object.create = function(obj) {
    function f() {};
    f.prototype = obj;
    return new f();
  }
}

if (!Object.prototype.extend) {
    Object.prototype.extend = function(properties) {
        function f() {};
        f.prototype = Object.create(this);
        for(var prop in properties) {
            f.prototype[prop] = properties[prop];
        }
        f.prototype._super = this;
        return new f();
    }
}