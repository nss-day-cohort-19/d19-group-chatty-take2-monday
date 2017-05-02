var Chatty = (function(taco) {
    taco.showMessages = function(){
    input = document.getElementById("usr-input");
    output = document.getElementById("messages");
    mess = taco.getMessages();
    for(i = 0; i < mess.length; i++){
        output.innerHTML += `<div class="test"><p class="col-sm-6">${mess[i]}<p><button id="btn${i}" class="delete btn btn-secondary">Delete</button></div>`;
    };
   // console.log("mess", mess);
    input.addEventListener ("keypress", function(key) {
        if (key.keyCode === 13) {
            //console.log("second mess", mess);


            output.innerHTML += `<div class="test"><p class="col-sm-6">${input.value}<p><button id="btn${mess.length}" class="delete btn btn-secondary">Delete</button></div>`;

            mess.push(input.value);

            Chatty.deleteMessages(mess);

            console.log("third mess", mess);
            input.value = '';

        };
    })

    Chatty.deleteMessages(mess);

}
return taco;
})(Chatty);