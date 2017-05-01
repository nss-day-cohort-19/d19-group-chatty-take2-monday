var Chatty = (function(taco){
	taco.showMessages = function(mess){
	output = document.getElementById("messages");
	for(i = 0; i < mess.length; i++){
		output.innerHTML += mess[i] + "<button id='i'>Delete</button><br>";
	}
}
	return taco;
})(Chatty);