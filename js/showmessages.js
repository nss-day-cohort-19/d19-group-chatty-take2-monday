var Chatty = (function(taco) {
    taco.showMessages = function(){
    input = document.getElementById("usr-input");
    output = document.getElementById("messages");
    mess = taco.getMessages();
    for(i = 0; i < mess.length; i++){
        output.innerHTML += `<div class="test"><p class="col-sm-6">${mess[i]}<p><button id="btn${i}" class="delete">Delete</button></div>`;
    };
   // console.log("mess", mess);
    input.addEventListener ("keypress", function(key) {
        if (key.keyCode === 13) {
            //console.log("second mess", mess);

<<<<<<< HEAD
            output.innerHTML += `<div class="test">` + input.value + `<button id="btn${mess.length}" class="delete">Delete</button></div><br>`;
            console.log("input.value", input.value);
            mess.push(input.value);
            //console.log("mess", mess);
            Chatty.deleteMessages(mess);
            //console.log("third mess", mess);
=======
            output.innerHTML += `<div class="test"><p class="col-sm-6">${input.value}<p><button id="btn${mess.length}" class="delete">Delete</button></div>`;
            mess.push(input.value);
            Chatty.deleteMessages(mess);
            console.log("third mess", mess);
>>>>>>> master
            input.value = '';

        };
    })
<<<<<<< HEAD
    
=======
    Chatty.deleteMessages(mess);
>>>>>>> master
}
    return taco;
})(Chatty);