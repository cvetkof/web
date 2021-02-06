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

// document.querySelector('.row-column-3-row').onmouseover = () => {
// 	document.querySelector('.block-header-3').style.color = '#bce1f7';
// 	document.querySelector('.row-column-txt-3').style.color = '#bce1f7';
// 	document.querySelector('.row-column-3-row').onmouseout = () => {
// 		document.querySelector('.block-header-3').style.color = 'white';
// 		document.querySelector('.row-column-txt-3').style.color = 'white';
// 	}
// };

// for (let i = 0; i < document.querySelectorAll('.row-column-3-row').length; i++) {
// 	// if (i == 0) {
// 	// 	document.querySelectorAll('.row-column-3-row')[i].addEventListener('onmouseover', () => {
// 	// 		document.querySelectorAll('.block-header-3')[i].style.color = '#bce1f7';
// 	// 		document.querySelector('.row-column-txt-3.row-column-txt-s').style.color = '#bce1f7';
// 	// 		document.querySelector('.row-column-txt-3.row-column-txt-e').style.color = '#bce1f7';
// 	// 	})
// 	// 	document.querySelectorAll('.row-column-3-row')[i].addEventListener('mouseout', () => {
// 	// 		document.querySelectorAll('.block-header-3')[i].style.color = 'white';
// 	// 		document.querySelector('.row-column-txt-3.row-column-txt-s').style.color = 'white';
// 	// 		document.querySelector('.row-column-txt-3.row-column-txt-e').style.color = 'white';
// 	// 	})
// 	// }
// 	if (i == 0) document.querySelectorAll('.row-column-txt-3')[i].style.color = '#bce1f7';
// 	document.querySelectorAll('.row-column-3-row')[i].addEventListener('mouseover', () => {
// 		document.querySelectorAll('.block-header-3')[i].style.color = '#bce1f7';
// 		document.querySelectorAll('.row-column-txt-3')[i + 1].style.color = '#bce1f7';
// 	})
// 	document.querySelectorAll('.row-column-3-row')[i].addEventListener('mouseout', () => {
// 		document.querySelectorAll('.block-header-3')[i].style.color = 'white';
// 		document.querySelectorAll('.row-column-txt-3')[i + 1].style.color = 'white';
// 	})
// }

// console.log(document.querySelector('.row-column-txt-3.row-column-txt-s'))