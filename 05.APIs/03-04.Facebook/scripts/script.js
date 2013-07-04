$('#light-box').hide(1);

    

function getProfileInfo() {
    FB.api('/me', function (response) {
        var holder = $("#profile-info");
        var location = response.location.name;
        var bday = response.birthday;
        var url = "https://graph.facebook.com/" + response.id + "/picture";
        holder.append("<h3 id='greetings'>Location: "+ location +". Birthday: " + bday + "</h3>");
    });
    $("#log").css("display", "none");
}

window.fbAsyncInit = function () {
    FB.init({
        appId: '332741096857271', // App ID
        channelUrl: '//http://bobbykolev.cloudvps.bg/facebook-api/', // Channel File
        status: true, // check login status
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true  // parse XFBML
    });
FB.login(function (response) {
        if (response.authResponse) {
            getProfileInfo();
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    }, { scope: 'read_friendlists,user_photos, user_birthday' });
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
        $('#light-box').slideDown("fast");
    })
    $('#light-box').on('click', function(){
        $('#light-box').fadeOut("slow");
    })
}

