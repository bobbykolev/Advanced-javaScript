$(document).ready(function () {

    var Slider = {
    init: function(content) {
        this.content = content;
    },
    render: function(selector) {
        this.selector = selector;
        for (var j = 0, len=this.content.length; j < len; j++) {
            if (j==0) {
                $(this.selector).append('<div class="current first"> '+this.content[j]+'</div>');
            }else if (j==len-1){
                $(this.selector).append('<div class="previous last"> '+this.content[j]+'</div>');
            }else {
                $(this.selector).append('<div class="previous"> '+this.content[j]+'</div>');
            }
        }
    }
};
    var theSlider = Object.create(Slider);
    var content = ["<h3>Strawberries</h3><img src='images/strawberries.png'>", 
                    "<h2>H2 Title1</h2><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nesciunt, dolor, nostrum ipsum alias voluptatem quasi quas atque illum ad blanditiis iusto sint consequatur totam voluptates non aspernatur. Iure, eum.</div><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nesciunt, dolor, nostrum ipsum alias voluptatem quasi quas atque illum ad blanditiis iusto sint consequatur totam voluptates non aspernatur. Iure, eum.</div><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nesciunt, dolor, nostrum ipsum alias voluptatem quasi quas atque illum ad blanditiis iusto sint consequatur totam voluptates non aspernatur. Iure, eum.</div><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nesciunt, dolor, nostrum ipsum alias voluptatem quasi quas atque illum ad blanditiis iusto sint consequatur totam voluptates non aspernatur. Iure, eum.</div>", 
                    "<h2>H2 Title2</h2><div>Lorem ipsum dolor sit amet <ul><li>list item</li><li>list item2</li></ul></div>", 
                    "<h2>H2 Title3</h2><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nesciunt, dolor, nostrum ipsum alias voluptatem quasi quas atque illum ad blanditiis iusto sint consequatur totam voluptates non aspernatur. Iure, eum.</div>", 
                    "<h2>H2 Title4</h2><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nesciunt, dolor, nostrum ipsum alias voluptatem quasi quas atque illum ad blanditiis iusto sint consequatur totam voluptates non aspernatur. Iure, eum.</div>", 
                    "<h2>H2 Title5</h2><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nesciunt, dolor, nostrum ipsum alias voluptatem quasi quas atque illum ad blanditiis iusto sint consequatur totam voluptates non aspernatur. Iure, eum.</div>", 
                    "<img src='images/apples.png'><h4>Apples</h4>"];
    
    theSlider.init(content);
    theSlider.render('#slider');

    $("#left-arrow").on('click', prev);
    $("#right-arrow").on('click', next);

    function next() {
       var curContent = $('.current');
            var nextContent = curContent.next();
            if (nextContent.length == 0)
                nextContent = $('#slider .first');

            curContent.removeClass('current').addClass('previous');
            nextContent.hide().removeClass('previous').slideDown('slow').addClass('current');
    }
    function prev() {
       var curContent = $('.current');
            var prevContent = curContent.prev();
            if (prevContent.length == 0)
                prevContent = $('#slider .last');
            curContent.removeClass('current').addClass('previous');
            prevContent.hide().removeClass('previous').slideDown('slow').addClass('current');
    }
        setInterval(next, 5000);

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
});


if (!Object.create) {
  Object.create = function(obj) {
    function f() {};
    f.prototype = obj;
    return new f();
  }
}