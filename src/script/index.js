
function entrou(elemento){
    var menu_elment = document.getElementById(elemento)
    menu_elment.innerText = "{" + elemento + "}"
}

function saiu(elemento){
    var menu_elment = document.getElementById(elemento)
    menu_elment.innerText = elemento 
}
