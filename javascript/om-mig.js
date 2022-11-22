function firstWord() {
    let text = document.querySelector('#firstWord');
    const words = text.innerHTML.toString().split(' ');

    var element = document.createElement("span");
    element.className = "big";
    element.appendChild(document.createTextNode(words[0]));
    console.log(element.innerHTML);
    text.textContent = "";
    text.appendChild(element);
    text.insertAdjacentText("beforeend", " "  + words[1])

}

firstWord();