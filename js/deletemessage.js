var Chatty = (function(taco) {
    var mess = [];
    taco.deleteMessages = function(){
    console.log("i am here within the deleteMessages function");
    var aj = document.getElementsByClassName("delete");
   
        for(i=0;i<aj.length;i++){
            console.log("aj", aj);
             aj.item(i).addEventListener("click", function(event){
               // console.log("event", event.target.closest("div"));
                 var deleteMessage = event.target.closest("div");
                 event.target.closest("div").remove();
                //console.log("deleteMessage", deleteMessage);
               })
        }
  
}
    return taco;
})(Chatty);

