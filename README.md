# youtube-id

[![Build Status](https://travis-ci.org/kyleoliveiro/youtube-id.svg?branch=master)](https://travis-ci.org/kyleoliveiro/youtube-id)
[![npm](https://img.shields.io/npm/v/youtube-id.svg)](https://www.npmjs.com/package/youtube-id)

Retrieve YouTube video ID's from URL strings

## Usage

	var youtubeID = require('youtube-id');
	var myURL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&nohtml5=False';

	console.log( youtubeID(myURL) ); // 'dQw4w9WgXcQ'
