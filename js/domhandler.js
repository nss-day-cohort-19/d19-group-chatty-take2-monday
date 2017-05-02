var clear = document.getElementById('clear'),
    input = document.getElementById('usr-input'),
    messages = document.getElementById('messages');
console.log(messages.innerHTML);
clear.addEventListener('click', function(){
    messages.innerHTML = '';
})

if(messages.innerHTML === '') {
    // clear.setAttribute("disabled", true);
    console.log('am tired');
   
}else {
    clear.setAttribute("disabled", false);
    console.log("enough");
}

Chatty.loadMessages();
