(function($, undefined) {

    $.fn.treeview = function(options) {
        if(!options) 
        {
            var options = {};
        }
        var defaults = { 
            collapsed: (options.collapsed != undefined)? options.collapsed : true, 
            speed: options.speed || "normal"
        };
            this.find('li>ul').show();
            if(defaults.collapsed == true) {
            this.find('li>ul').hide();
        }
        return this.on('click', 'span', function(ev) {
            ev.stopPropagation();
            $(this).parent().find('>ul').toggle(defaults.speed);
        });
    }   
})(jQuery);