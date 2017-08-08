window.onload = function() {
	var element = $('.bigApple')
	var originalDist = element.position().top
	moveApple(originalDist)

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop()
		moveApple(originalDist + scrollTop)
	})
}

function isPhone() {
	return $(window).width() <= 550
}

function moveApple(distance) {
	$('.bigApple').css('padding-top', isPhone() ? '10%' : distance)
}
