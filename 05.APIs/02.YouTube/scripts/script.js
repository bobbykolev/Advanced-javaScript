//hide content
   $('#player-border').hide();
   $('#revokeButton').hide();
   $('#controls').hide();

//chacks the singIn and shows the content and hiding the signIn button
   function signinCallback(authResult) {
  if (authResult['access_token']) {
    $('#player-border').fadeIn();
    $('#signinButton').hide();
    $('#revokeButton').fadeIn('slow');
    $('#controls').fadeIn('slow');
     gapi.client.load('plus','v1', function(){
     var request = gapi.client.plus.people.get({
       'userId': 'me'
     });
     request.execute(function(resp) {
        $('#profile').empty();
        $('#profile').append('<div id="user-info"><img src="' + resp.image.url + '"><h3>' + resp.displayName + '</h3></div>');
        console.log(resp);
     });
    });    

    document.getElementById('signinButton').setAttribute('style', 'display: none');
  } else if (authResult['error']) {
    // There was an error.
    // Possible error codes:
    //   "access_denied" - User denied access to your app
    //   "immediate_failed" - Could not automatically log in the user
    console.log('There was an error: ' + authResult['error']);
  }
}
//sets the disconection and clear the content and shows the signIn button
function disconnectUser(access_token) {
  var revokeUrl = 'https://accounts.google.com/o/oauth2/revoke?token=' +
      gapi.auth.getToken().access_token;

  // Perform an asynchronous GET request.
  $.ajax({
    type: 'GET',
    url: revokeUrl,
    async: false,
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(nullResponse) {
        $('#player-border').hide();
        $('#signinButton').show();
        $('#revokeButton').hide();
        $('#controls').hide();
        $('#profile').empty();
        player.pauseVideo();
      // Do something now that user is disconnected
      // The response is always undefined.
    },
    error: function(e) {
      // Handle the error
       console.log(e);
      // You could point users to manually disconnect if unsuccessful
      // https://plus.google.com/apps
    }
  });
}
// Could trigger the disconnect on a button click
$('#revokeButton').click(disconnectUser);  


//YouTube
 var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390', //must be bigger than 200px
        width: '640', //must be bigger than 200px
        videoId: 'ZWir6wUkPtw',
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
     event.target.pauseVideo();
}

document.getElementById('single-video').addEventListener('click', function () {
    var video = document.getElementById('load-video').value;
    player.loadVideoById(video, 0, "large");
}, false);

document.getElementById('pause').addEventListener('click', function () {
        player.pauseVideo();
}, false);

document.getElementById('play').addEventListener('click', function () {
    player.playVideo();
}, false);

document.getElementById('load-playlist').addEventListener('click', function () {
    var videoPlaylist = document.getElementById('playlist').value.split(',');

    player.loadPlaylist(videoPlaylist, 0, 0, "large");
}, false);

document.getElementById('previous').addEventListener('click', function () {
    player.previousVideo();
}, false);

document.getElementById('next').addEventListener('click', function () {
    player.nextVideo();
}, false);

document.getElementById('mute').addEventListener('click', function () {
    player.mute();
}, false);

document.getElementById('unmute').addEventListener('click', function () {
    player.unMute();
}, false);

document.getElementById('vol').addEventListener('change', function (number) {
    player.setVolume(number.target.value);
}, false);