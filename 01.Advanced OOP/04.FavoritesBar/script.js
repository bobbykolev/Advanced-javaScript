   var Url = {
    init: function (title, link) {
        this.title = title;
        this.link = link;
    }
};

var Folder = {
    init: function (title, urls) {
        this.title = title;
        this.urls = urls;
    }
};

var FavoriteSitesBar = {
    init: function (urls, folders) {
        this.urls = urls;
        this.folders = folders;
    },
    render: function (containerId) {
        var container,
            i,
            urlsCount,
            foldersCount;

        container = document.getElementById(containerId);

        urlsCount = this.urls.length;
        for (i = 0; i < urlsCount; i++) {
            this._renderUrl(this.urls[i], container);
        }

        foldersCount = this.folders.length;
        for (i = 0; i < foldersCount; i++) {
            this._renderFolder(this.folders[i], container);
        }
    },
    _renderUrl: function (url, container) {
        var urlContainer = document.createElement("a");
        urlContainer.setAttribute("class", "fav-url");
        urlContainer.innerHTML = url.title;
        urlContainer.setAttribute("href", url.link);
        urlContainer.addEventListener("click", function (ev) {
            if (!ev) {
                ev = window.event;
            }

            if (ev.preventDefault) {
                ev.preventDefault();
            }

            if (ev.stopPropagation) {
                ev.stopPropagation();
            }

            var tab = window.open(url.link, '_blank');
            tab.focus();
        }, false);

        container.appendChild(urlContainer);
    },
    _renderFolder: function (folder, container) {
        var folderContainer,
            urlsContainer,
            urlListItem,
            urlsCount;

        folderContainer = document.createElement("div");
        folderContainer.setAttribute("class", "fav-folder");
        folderContainer.innerHTML = folder.title;
        
        urlsContainer = document.createElement("ul");
        urlsContainer.style.display = "none";
        urlsContainer.style.padding = "0";

        urlsCount = folder.urls.length;
        for (i = 0; i < urlsCount; i++) {
            urlListItem = document.createElement("li");
            this._renderUrl(folder.urls[i], urlListItem);
            urlsContainer.appendChild(urlListItem);
        }

        folderContainer.appendChild(urlsContainer);

        folderContainer.addEventListener("mouseover", function (ev) {
            if (!ev) {
                ev = window.event;
            }

            if (ev.preventDefault) {
                ev.preventDefault();
            }

            if (ev.stopPropagation) {
                ev.stopPropagation();
            }

            urlsContainer.style.display = "block";
        }, false);

        folderContainer.addEventListener("mouseout", function (ev) {
            if (!ev) {
                ev = window.event;
            }

            if (ev.preventDefault) {
                ev.preventDefault();
            }

            if (ev.stopPropagation) {
                ev.stopPropagation();
            }

            urlsContainer.style.display = "none";
        }, false);

        container.appendChild(folderContainer);
    }
}
var wpCodex = Object.create(Url);
wpCodex.init("WordPress Codex", "http://codex.wordpress.org/");
var jQueryFundamentals = Object.create(Url);
jQueryFundamentals.init("jQuery Fundamentals", "http://jqfundamentals.com/");
       
        var eloquentJs = Object.create(Url);
        eloquentJs.init("Eloquent JavaScript", "http://eloquentjavascript.net/contents.html");
        var singlePageApps = Object.create(Url);
        singlePageApps.init("Single page apps in depth", "http://singlepageappbook.com/");
       
        var jsOnlineBooks = Object.create(Folder);
        jsOnlineBooks.init("Trainers blogs", [eloquentJs, singlePageApps]);

        var favoriteSitesBar1 = Object.create(FavoriteSitesBar);
        favoriteSitesBar1.init(
            [wpCodex, jQueryFundamentals],
            [jsOnlineBooks]);
        favoriteSitesBar1.render("favorite-sites-bar");


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