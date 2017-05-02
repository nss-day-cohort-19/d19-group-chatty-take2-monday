var Chatty = (function(taco) {

    //var mess = [];
    taco.deleteMessages = function(mess){
    console.log("i am here within the deleteMessages function", mess);
    var aj = document.getElementsByClassName("delete");

        for(i=0;i<aj.length;i++){
           // console.log("aj", aj);
             aj.item(i).addEventListener("click", function(event){
               // console.log("event", event.target.closest("div"));
                 var deleteMessage = event.target.closest("div");
                var j = Number(event.toElement.id.slice(-1));

                console.log(mess);

                mess.splice(j, 1, "");
                 console.log(mess);

                 event.target.closest("div").remove();
               
               })
        }

}
    return taco;
})(Chatty);

