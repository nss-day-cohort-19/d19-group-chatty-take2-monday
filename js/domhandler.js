var clear = document.getElementById('clear'),
	input = document.getElementById('usr-input'),
	messages = document.getElementById('messages');
console.log(messages.innerHTML);
clear.addEventListener('click', function(){
	messages.innerHTML = '';
	clear.setAttribute("disabled", true);
})


Chatty.loadMessages();
Chatty.showMessages();