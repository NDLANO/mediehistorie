var isiPad = navigator.userAgent.indexOf('iPad') != -1;

// for jquery.fitvids.js
$("#page, #last").live( 'pageinit', function(event) {
	$(".videocontainer").fitVids();
	if (isiPad) {
		$(".nrk-video-container").remove();
		$(".nrk-image").removeClass("hidden");
	}
});


// preload next page
// $("#page").live( 'pageshow', function(event) {
// 	var pagenr = $.mobile.activePage.attr('data-index');
// 	$.mobile.loadPage((parseInt(pagenr, 10) + 1) + ".html");
// });


// event handlers for navigation
$("body").live("swipeleft swiperight keydown click", function(e) {  //touchstart eller click
	var pageid = $.mobile.activePage[0].id;
	var pagenr = $.mobile.activePage.attr('data-index');
	var nextPage;
	var dir = e.type;


	if (pageid != "index"){
		if ($(e.target).hasClass("nav-button-home")) {
			$.mobile.changePage("../menu.html", { transition: "fade"} );
		}

		else if(pageid == "last" && dir == "swipeleft" || pageid == "last" && $(e.target).hasClass("nav-button-right") || pageid == "last" && e.keyCode === 39) {
			$.mobile.changePage("../menu.html", { transition: "fade"} );
		}
		else if(dir == "swipeleft" || $(e.target).hasClass("nav-button-right") || e.keyCode === 39) {
			nextPage = parseInt(pagenr, 10) + 1;
			$.mobile.changePage(nextPage + ".html", { transition: "slidefade"} );
			if(pageid != "last") {
			}
		}

		else if(dir == "swiperight" || $(e.target).hasClass("nav-button-left") || e.keyCode === 37) {
			if (pagenr == "1") {
				$.mobile.changePage("../menu.html", { transition: "fade"} );
			}
			else {
				nextPage = parseInt(pagenr, 10) - 1;
				$.mobile.changePage(nextPage + ".html", { transition: "slidefade", reverse: "true"} );
			}
		}
	}
});

