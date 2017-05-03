function displayTime() {
    var str = "";

    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    str += hours + ":" + minutes + ":" + seconds + " ";
    if(hours > 11){
        str += "PM"
    } else {
        str += "AM"
    }
    return str;
}

var Chatty = (function(taco) {
    taco.showMessages = function(){
    input = document.getElementById("usr-input");
    output = document.getElementById("messages");
    mess = taco.getMessages();
    for(i = 0; i < mess.length; i++){
        output.innerHTML += `<div class="test"><p class="col-sm-6">${mess[i]}<p><button id="btn${i}" class="delete btn btn-secondary">Delete</button><p class="col-sm-2 col-sm-offset-1">${displayTime()}</p></div>`;
    };
   // console.log("mess", mess);
    input.addEventListener ("keypress", function(key) {
        if (key.keyCode === 13) {
            //console.log("second mess", mess);


            output.innerHTML += `<div class="test"><p class="col-sm-6">${input.value}<p><button id="btn${mess.length}" class="delete btn btn-secondary">Delete</button><p class="col-sm-2 col-sm-offset-1">${displayTime()}</p></div>`;
            console.log("now", displayTime());
            mess.push(input.value);

            Chatty.deleteMessages(mess);

            console.log("third mess", mess);
            input.value = '';

            if(document.getElementsByClassName('test').length > 20){
                messages.removeChild(messages.childNodes[0]);
            }

        };
    })

    Chatty.deleteMessages(mess);

}
return taco;
})(Chatty);