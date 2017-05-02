console.log ("i am here");

var Chatty = (function (taco) {
  var messageArray = [];
  taco.loadMessages = function() {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        messageArray = JSON.parse(this.responseText);
        console.log("messages data is loaded");
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the
        // message array as an argument.
        Chatty.showMessages();
        //Chatty.deleteMessages(mess);
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






