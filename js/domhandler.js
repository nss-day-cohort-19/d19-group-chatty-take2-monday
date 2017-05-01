var clear = document.getElementById('clear'),
	input = document.getElementById('usr-input'),
	messages = document.getElementById('messages'),
	darkTheme = document.getElementById('darkTheme'),
	nav = document.getElementById('nav'),
	largeText = document.getElementById('makeLarge');

clear.addEventListener('click', function(){
	messages.innerHTML = '';
	clear.setAttribute("disabled", true);
})

darkTheme.addEventListener('click', function(){
	document.getElementsByTagName('body')[0].classList.toggle('dark');
	nav.classList.toggle('navbar-inverse');
	nav.classList.toggle('navbar-default');
	messages.classList.toggle('dark-msg');
})

largeText.addEventListener('click', function(){
	document.getElementsByTagName('body')[0].classList.toggle('larger');
})

Chatty.loadMessages();
Chatty.showMessages();