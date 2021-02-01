$('.change-btn').click(function () {
	$('.change-show').toggleClass("show");
	$('.first').toggleClass("rotate");
});

$('.sidebar-btn').click(function () {
	$(this).toggleClass("click");
	$('.main-content').toggleClass("click-for-sidebar-btn");
	$('.sidebar').toggleClass("show");
});