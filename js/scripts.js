  $(document).ready(function(){
        $('#blindify').blindify({
            numberOfBlinds: 10,
            animationSpeed: 600,
            delayBetweenSlides: 200,
            slideVisibleTime: 3000,
            width: 780,
            height: 550,
           
        });
    });

// Intialize Masonry
$('article').masonry({
	itemSelector: 'section',
	columnWidth: 200,
	gutter: 10,
	FitWidth: true
});