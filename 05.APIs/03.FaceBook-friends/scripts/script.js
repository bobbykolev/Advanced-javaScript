$('#light-box').css('display','none');

window.fbAsyncInit = function () {
    FB.init({
        appId: '332741096857271', // App ID
        channelUrl: '//http://bobbykolev.cloudvps.bg/facebook-api/', // Channel File
        status: true, // check login status
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true  // parse XFBML
    });
};

// Load the SDK asynchronously
(function (d) {
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));

$("#show-friends").click(function () { 
    getFriends() 
   

    
});
function getFriends() {
    FB.api('/me/friends', function (response) {
        var friendsHolder = $('#firends-holder');
        for (i = 0; i < response.data.length; i++) {
            var friendPictureUrl = 'https://graph.facebook.com/' + response.data[i].id + '/picture';
            var friendName = response.data[i].name.split(' ').join('');
            friendsHolder.append("<img class=\"images\" src =" + friendPictureUrl + " title=" + friendName + "/>");
        }
         ev();
    });
}
var ev = function(){
    $('.images').on('click', function(){
        var src = $(this).attr('src');
        $('#light-box').empty();
        $('#light-box').append('<div id="border"><img src="'+src+'?type=large"></div>');
        $('#light-box').css('display','block');
    })
    $('#light-box').on('click', function(){
        $('#light-box').css('display','none');
    })
}

