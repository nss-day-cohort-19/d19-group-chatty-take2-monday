var Chatty = (function(taco) {

    taco.editMessages = function(mess){

        var edit = document.getElementsByClassName("edit");

        for( i = 0; i < edit.length; i++) {

            edit.item(i).addEventListener("click", function(event){
                var editMessage = event.target.closest('div');

                if(this.textContent === 'Edit'){
                    console.log('test');
                    const p = editMessage.firstElementChild;
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.setAttribute('class', 'col-sm-6 col-sm-offset-1 inputedit');
                    input.value = p.textContent;
                    editMessage.insertBefore(input, p);
                    editMessage.removeChild(p);
                    input.focus();
                    editMessage.childNodes[3].textContent = 'Save';

                    input.addEventListener("keyup", function(event){

                        if (event.keyCode === 13) {
                            var editMessage = event.target.closest('div');
                            const input = editMessage.firstElementChild;
                            const p = document.createElement('p');
                            p.textContent = input.value;
                            p.setAttribute('class', 'col-sm-6');
                            editMessage.insertBefore(p, input);
                            editMessage.removeChild(input);
                            editMessage.childNodes[3].textContent = 'Edit';
                        }

                    })
                }
                else if(this.textContent === 'Save'){
                    console.log("hello");

                    var editMessage = event.target.closest('div');
                    const input = editMessage.firstElementChild;
                    const p = document.createElement('p');
                    p.textContent = input.value;
                    p.setAttribute('class', 'col-sm-6');
                    editMessage.insertBefore(p, input);
                    editMessage.removeChild(input);
                    editMessage.childNodes[3].textContent = 'Edit';
                }
            })
        }
    }
    return taco;
})(Chatty || {});