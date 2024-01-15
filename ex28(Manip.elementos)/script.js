function clicou(){
    const teste =  document.querySelector('#nois')
    const ul = document.querySelector('ul')
    
    let newLi = document.createElement("li");
    newLi.innerText = "Item Adicionado"


    ul.prepend(newLi);
    //ul.appendChild(newLi);
}