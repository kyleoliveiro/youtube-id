var url = require('url'),
	querystring = require('querystring');

var youtubeTriggers = ['youtube', 'youtu.be'];

// gets a YouTube video ID from a valid YouTube video URL
function youtubeID(urlString) {
	urlString = urlString.match(/^http/) ? urlString : 'http://' + urlString;

	var isYoutubeLink = false,
		videoID = false;

	youtubeTriggers.forEach(function(trigger) {
		if(urlString.indexOf(trigger) > -1) {
			isYoutubeLink = true;
		}
	});

	// return video ID if is link is valid
	if(isYoutubeLink) {
		var parsedUrl = url.parse(urlString),
			v = querystring.parse(parsedUrl.query).v;

		// try to get ID from 'v' query
		if(v) {
			videoID = v;
		}

		// else get ID by splitting path
		else {
			var path = parsedUrl.pathname;
			path = path
				.split('?')[0]
				.split('&')[0];

			videoID = path.split('/').pop();
		}
	}

	return videoID; // returns false if no ID
}

module.exports = youtubeID;
