// анимация сайдбара

document.querySelector('.change-btn').onclick = () => {
	document.querySelector('.change-show').classList.toggle("show");
	document.querySelector('.first').classList.toggle("rotate");
};

document.querySelector('.sidebar-btn').onclick = () => {
	document.querySelector('.sidebar-btn').classList.toggle("click");
	document.querySelector('.main-content').classList.toggle("click-for-sidebar-btn");
	document.querySelector('.sidebar').classList.toggle("show");
};




// подсчет денег в долларах и евро

let dollar = document.querySelectorAll('.row-column-txt-s')[2].textContent;
let euro = document.querySelectorAll('.row-column-txt-e')[2].textContent;
console.log(dollar);
console.log(euro);


