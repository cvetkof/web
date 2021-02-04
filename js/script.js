// $('.change-btn').click(function () {
// 	$('.change-show').toggleClass("show");
// 	$('.first').toggleClass("rotate");
// });

// $('.sidebar-btn').click(function () {
// 	$(this).toggleClass("click");
// 	$('.main-content').toggleClass("click-for-sidebar-btn");
// 	$('.sidebar').toggleClass("show");
// });


document.querySelector('.change-btn').onclick = () => {
	document.querySelector('.change-show').classList.toggle("show");
	document.querySelector('.first').classList.toggle("rotate");
};

document.querySelector('.sidebar-btn').onclick = () => {
	document.querySelector('.sidebar-btn').classList.toggle("click");
	document.querySelector('.main-content').classList.toggle("click-for-sidebar-btn");
	document.querySelector('.sidebar').classList.toggle("show");
};