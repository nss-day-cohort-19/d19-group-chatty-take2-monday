var clear = document.getElementById('clear'),
    input = document.getElementById('usr-input'),
    messages = document.getElementById('messages'),
    darkTheme = document.getElementById('darkTheme'),
    nav = document.getElementById('nav'),
    largeText = document.getElementById('makeLarge');
    var  modalbgColor = document.getElementById("sel-bg-color");
    var modalfontColor = document.getElementById("sel-font-color");


clear.addEventListener('click', function(){
    messages.innerHTML = '';
    clear.setAttribute("disabled", true);
   // console.log(clear);
});

input.addEventListener ("keypress", function(key) {
    if (key.keyCode === 13) {
    	clear.removeAttribute("disabled");
    	//console.log(clear);
    }
});

darkTheme.addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.toggle('dark');
    nav.classList.toggle('navbar-inverse');
    nav.classList.toggle('navbar-default');
    messages.classList.toggle('dark-msg');
});

largeText.addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.toggle('larger');
});

modalbgColor.addEventListener("change", function(){
    console.log("bgevent", event.target.value);
    if(event.target.value == "Dark"){
        console.log("DARKKKKK");
        document.getElementsByTagName('body')[0].classList.toggle('dark');
        nav.classList.toggle('navbar-inverse');
        nav.classList.toggle('navbar-default');
        messages.classList.toggle('dark-msg');
    } else 
    {

    }
});

modalfontColor.addEventListener("change", function(){
    console.log("fontevent", event.target.value);
     if(event.target.value == "red"){
        console.log("DARKKKKK");
        document.getElementsByTagName('body')[0].classList.toggle('red');
        nav.classList.toggle('navbar-inverse');
        nav.classList.toggle('navbar-default');
        messages.classList.toggle('dark-msg');
    } else if(event.target.value == "black"){
        console.log("DARKKKKK");
        document.getElementsByTagName('body')[0].classList.toggle('black');
        nav.classList.toggle('navbar-inverse');
        nav.classList.toggle('navbar-default');
        messages.classList.toggle('dark-msg');

        
    }

});

Chatty.loadMessages();