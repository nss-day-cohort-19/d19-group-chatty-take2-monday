console.log ("i am here");

var Chatty = (function () {
  var messages = [];
  

  return {
    loadMessages: function (showMessages) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        messages = JSON.parse(this.responseText);
        console.log("messages data is loaded");
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // message array as an argument.
        showMessages(messages);

      });

      loader.addEventListener("error", function () {
        console.log("File loading errored out");
      });

      loader.open("GET", "messages.json");
      loader.send();

    }

  }
})();

