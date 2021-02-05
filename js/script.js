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

document.querySelector('.row-column-3-row').onmouseover = () => {
	document.querySelector('.block-header-3').style.color = '#bce1f7';
	document.querySelector('.row-column-txt-3').style.color = '#bce1f7';
	document.querySelector('.row-column-3-row').onmouseout = () => {
		document.querySelector('.block-header-3').style.color = 'white';
		document.querySelector('.row-column-txt-3').style.color = 'white';
	}
};

console.log(document.querySelectorAll('.row-column-3-row'));