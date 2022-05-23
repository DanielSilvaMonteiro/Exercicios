 var position = document.getElementById("lista");
 document.querySelector('#adiciona').addEventListener("click", lista);
var areatext, newText, newEl, position, check;
function lista(){
    areatext = document.getElementById("conteudo").value;
    newText = document.createTextNode(areatext);
    newEl = document.createElement('li');
    addCheckbox();
    newEl.appendChild(newText);
    position.appendChild(newEl);
    
    limpaTextArea();
}

function limpaTextArea(){
    document.getElementById("conteudo").value = "";
    document.getElementById("conteudo").focus();
}


function addCheckbox(){
    check = document.createElement("INPUT");
    check.setAttribute("type", "checkbox");
    check.setAttribute("name",areatext);
    check.setAttribute("id", areatext);
    newEl.appendChild(check);
}