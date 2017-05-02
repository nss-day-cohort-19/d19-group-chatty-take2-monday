console.log ("i am here");

var Chatty = (function (taco) {
  var messageArray = [];

  taco.loadMessages = function() {
    var loader = new XMLHttpRequest();


    loader.addEventListener("load", function () {
      messageArray = JSON.parse(this.responseText);


      console.log("messages data is loaded");

      Chatty.showMessages();
    });

    loader.addEventListener("error", function () {
      console.log("File loading errored out");
    });

    loader.open("GET", "messages.json");
    loader.send();
  }

  taco.getMessages = function(){
    return messageArray;
  }

  return taco;
})(Chatty || {});