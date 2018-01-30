// Video player features

	$('video').mediaelementplayer({

		features: ['playpause', 'current', 'track', 'progress', 'duration', 'volume', 'fullscreen'],
		alwaysShowControls: true,
		enableAutosize: true,
		stretching: 'responsive'

	});


//Text highlight when videos plays
 

	const video = document.getElementsByTagName('video')[0];
	const span = document.querySelectorAll('div span');

	//Track current time in video
	video.addEventListener('timeupdate', function(event){

		const currentTime = video.currentTime;

		
	//Iterate through all span elements with time codes
		for(let i = 0; i < span.length; i++){

			let spanStart = parseFloat(span[i].dataset.timecodestart);
			let spanEnd = parseFloat(span[i].dataset.timecodestop);
			let thisSpan = span[i];

	//Add class to span with timestamp
			if( currentTime > spanStart && currentTime < spanEnd) {

				thisSpan.classList.add('highlight');

			} else {

				thisSpan.classList.remove('highlight');

			}

		}

	});


//Set video time when user clicks on a certain sentence

	for(let i = 0; i < span.length; i++){
		
		document.querySelectorAll('div span')[i].addEventListener('click', function(){

			let spanStart = parseFloat(span[i].dataset.timecodestart);
			let currentTime = video.currentTime;

			video.currentTime = spanStart;
			video.play();

		});

	}

	