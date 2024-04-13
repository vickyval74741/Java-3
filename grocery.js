function newItem() {
    const  li = document.createElement("li");
    const inputValue = document.getElementById("item-input").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("grocery-list").appendChild(li);
    }
    document.getElementById("item-input").value = "";

    li.onclick = function(ev) {
        ev.target.remove();
    }
}