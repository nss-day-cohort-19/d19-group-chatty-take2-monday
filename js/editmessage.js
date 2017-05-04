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

            
            })
        }
    }
    return taco;
})(Chatty);