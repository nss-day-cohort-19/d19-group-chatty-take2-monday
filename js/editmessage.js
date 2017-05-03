var Chatty = (function(taco) {

    taco.editMessage = function(){
        console.log("editMessage function");

        var editMess = document.getElementsByClassName("edit");

        for(i = 0; i < editMess.length; i++){
            editMess.item(i).addEventListener("click", function(event){
                var editMessage = event.target.closest("div").firstChild.innerHTML;
                input.value = editMessage;
                console.log("editMessage", editMessage);

                input.addEventListener ("keypress", function(key) {
                    if (key.keyCode === 13) {
                        editMessage = input.value;
                    }
                });

            //     var j = Number(event.toElement.id.slice(-1));

            //     console.log(mess);

            //     mess.splice(j, 1, "");

            //     console.log(mess);

            //     event.target.closest("div").remove();
            //     //console.log("deleteMessage", deleteMessage);
            //     if(messages.innerHTML == '') {
            //         clear.setAttribute('disabled', true);
            //     }
            })
        }
    }
    return taco;
})(Chatty);