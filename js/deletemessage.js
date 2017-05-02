var Chatty = (function(taco) {
   
    taco.deleteMessages = function(){
    var aj = document.getElementsByClassName("delete");
        for(i=0;i<aj.length;i++){
            //console.log("aj", aj);
             aj.item(i).addEventListener("click", function(event){
               // console.log("event", event.target.closest("div"));
                 var deleteMessage = event.target.closest("div");
                 //var j = Number(event.toElement.id.slice(-1));
                // console.log("mess", mess);
                 //mess.splice(j, 1, "")
                 event.target.closest("div").remove();
               ;
               })
        }
  
}
    return taco;
})(Chatty);

