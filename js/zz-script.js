var player;
function onYouTubePlayerAPIReady() {player = new YT.Player('player');}

$('.count__number').counterUp({
  delay: 100,
  time: 2000
});

$('.video__footer').click(function(){
  $( ".popup" ).addClass( "popup--active");
  $( ".popup__video" ).addClass( "popup__video--active");
});

$('.popup').click(function(){
  $( ".popup" ).removeClass( "popup--active");
  $( ".popup__video" ).removeClass( "popup__video--active");
  player.stopVideo();
});
