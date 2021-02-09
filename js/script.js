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
let allCosts = document.querySelectorAll('.row-column-txt-r')[0].textContent;
let changeForDay = document.querySelectorAll('.row-column-txt-r')[1].textContent;
let allCostsDollar = document.querySelectorAll('.row-column-txt-s')[0];
let allCostsEuro = document.querySelectorAll('.row-column-txt-e')[0];
let changeForDayDollar = document.querySelectorAll('.row-column-txt-s')[1];
let changeForDayEuro = document.querySelectorAll('.row-column-txt-e')[1];

allCostsDollar.innerHTML = `${(allCosts / dollar).toFixed(0)}.<small>${((allCosts / dollar) % 1).toFixed(1) * 10}<small/>`;
allCostsEuro.innerHTML = `${(allCosts / euro).toFixed(0)}.<small>${((allCosts / euro) % 1).toFixed(1) * 10}<small/>`;
changeForDayDollar.innerHTML = `${(changeForDay / dollar).toFixed(0)}.<small>${((changeForDay / dollar) % 1).toFixed(1) * 10}<small/>`
changeForDayEuro.innerHTML = `${(changeForDay / euro).toFixed(0)}.<small>${((changeForDay / euro) % 1).toFixed(1) * 10}<small/>`



