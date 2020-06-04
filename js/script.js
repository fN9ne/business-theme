function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else{
		document.querySelector('body').classList.add('no-webp');
	}
});

let button = document.querySelector('.burger__button');
	let burger = document.querySelector('.menu')
	let menu = document.querySelector('.burger__menu');
	let close = document.querySelector('.close')
button.addEventListener("click", function(e) {
	menu.classList.toggle('_active');
	burger.classList.toggle('toggleBurger')
	close.classList.toggle('_colored');
	close.classList.toggle('toggleBurger')
});
menu.addEventListener("click", function(e) {
	menu.classList.toggle('_active');
	burger.classList.toggle('toggleBurger')
	close.classList.toggle('_colored');
	close.classList.toggle('toggleBurger')
});

let button1 = document.querySelector('.footer__burger-button');
let burger1 = document.querySelector('.menu1');
let menu1 = document.querySelector('.footer__burger-menu');
let close1 = document.querySelector('.close1');
button1.addEventListener("click", function(e) {
	menu1.classList.toggle('_active1');
	burger1.classList.toggle('toggleBurger1')
	close1.classList.toggle('_colored1');
	close1.classList.toggle('toggleBurger1');
});
menu1.addEventListener("click", function(e) {
	menu1.classList.toggle('_active1');
	burger1.classList.toggle('toggleBurger1')
	close1.classList.toggle('_colored1');
	close1.classList.toggle('toggleBurger1');
});