//Elementos
const ul = document.querySelector('ul')
const input = document.querySelector('input')


//Funções
function apertou(e){
    if(e.key === 'Enter'){
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value
        ul.appendChild(newLi)
        input.value = '';
    }
}

//Eventos
input.addEventListener('keyup', apertou)