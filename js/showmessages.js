function showMessages(mess){
	input = document.getElementById('usr-input');
	output = document.getElementById('messages');

	for(let i = 0; i < mess.length; i++){
		output.innerHTML += mess[i] + `<button id="btn${i}">Delete</button><br>`;
		};

	input.addEventListener ('keyup', (key) => {
		if (key.keyCode == 13) {
			output.innerHTML += `${input.value} <button>Delete</button><br>`;
			input.value = '';
		};
	})
}

Chatty.loadMessages(showMessages);