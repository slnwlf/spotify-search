// wait for DOM to load before running JS
$(function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');
  
  // your code here

  $('#search').on('submit', function (event)  {
  	event.preventDefault(); 
  	console.log("form is submitting");

	var searchedTracks = $('#track').val();
	console.log(searchedTracks);

  	$.get('https://api.spotify.com/v1/search?q=' + searchedTracks + '&type=track', (function (data) {
  	// var artistResults = data.artists.items;

  	$('#track').val(" "); 

  	var trackResults = data.tracks.items;

  	console.log(data.tracks.items);

  	trackResults.forEach(function (track) { 
  		console.log(track.artists[0].name);
  		$('#results').append('<p>' + track.name + ', by ' + track.artists[0].name + '</p>');
  	});

  	$('.btn').click(function() {
  		$('#results').empty();

  	});

  	//artistResults.forEach(function (artist) {
  	//	console.log(data.artists.name);
  	//	$('#results').append('<p>' + artist.name + '</p>');
  	
  	//});
	// console.log(data.artists);
})
);
  });




});