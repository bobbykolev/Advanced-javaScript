$(document).ready(function () {

    var addThumbs = {
    init: function(paths, titles) {
        this.paths = paths;
        this.titles = titles;
        
    },
    render: function(selector) {
        this.selector = selector;
        for (var j = 0, len=this.paths.length; j < len; j++) {
            $(this.selector).append('<li><img src="'+this.paths[j]+'" alt="'+this.paths[j].replace('images/', '')+'" title="'+j+'"></li>');
        }
    }
};
 //the thumbnais initializing
    var thePaths = Object.create(addThumbs);
    var srcArr = ["images/strawberries.png", 
                    "images/papaya.png", 
                    "images/figs.png", 
                    "images/cherries.png", 
                    "images/cherries-red.png", 
                    "images/kiwis.png", 
                    "images/apples.png"];
    var titles = ["strawberries title", 
                    "long looooong looooooooooooooooooooooooooooong veeeery loooongtitle papaya title", 
                    "figs title", 
                    "cherries title", 
                    "cherries-red title", 
                    "kiwis title", 
                    "apples title"];
    thePaths.init(srcArr, titles);
    thePaths.render('#thumbs-list');

    $("#imgTitle>h2").text(titles[0]);

    $('li').on('click', function () {
        var rel = $(this).find('img').attr('src');
        var index = $(this).find('img').attr('title');
        $("#slide-img").attr("src", rel);
        $("#imgTitle>h2").text(titles[index]);
    });

    $("#left-arrow").on('click', next);

    $("#right-arrow").on('click', prev);

    i = 0,
    l = srcArr.length;

    function next() {

        var index = srcArr.indexOf($("#slide-img").attr("src"));
        if (index == 0) {
            index = l
        };
        $("#slide-img").attr("src", srcArr[index - 1]);
        $("#imgTitle>h2").text(titles[index - 1]);
    }
    function prev() {
        var index = srcArr.indexOf($("#slide-img").attr("src"));
        if (index == l - 1) {
            index = -1
        };
        $("#slide-img").attr("src", srcArr[index + 1]);
        $("#imgTitle>h2").text(titles[index + 1]);
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