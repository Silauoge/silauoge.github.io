function newItem() {
    let myInputValue = document.getElementById('myInputText').value;
    let listItem = document.createElement('li');
    let textNode = document.createTextNode(myInputValue);
    listItem.appendChild(textNode);
    if (myInputValue === '') {
    alert('Tuščias laukelis!');
   } else {
   document.getElementById('demo').appendChild(listItem);
   }
}
