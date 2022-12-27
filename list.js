function newTodo() {
    let inputValue = document.getElementById('myInputText').value;
    let listItem = document.createElement('li');
    let span = document.createElement('SPAN');
    let toDo = document.createTextNode(inputValue);
    let closeToDo = document.createTextNode('\u00D7');
   
    listItem.appendChild(toDo);
    span.appendChild(closeToDo);
    listItem.appendChild(span);

    span.addEventListener('click', () => {
        listItem.remove();
    });

    if (inputValue === '') {
    alert('Tuščias laukelis!');
    } else {
    document.getElementById('demo').appendChild(listItem);
    }
}


