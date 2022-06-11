const toggle = document.getElementById('menu-btn');
const navbar = document.getElementById('menu')


document.onclick = function (e) {
	if (e.target.className =='menu-link p-2 px-32 my-2 text-secondary z-20') {
		toggle.classList.remove('open')
		navbar.classList.remove('flex')
		navbar.classList.add('hidden')
	}
}


// toogle hamburger
toggle.onclick = function () {
	toggle.classList.toggle('open')
	navbar.classList.toggle('flex')
	navbar.classList.toggle('hidden')


}