// DOM = Document Object Model
function clicou() {
    console.log("Clicou no botão")
}

let botao = document.querySelector('.botao');
botao.addEventListener("click", clicou)



//<button class="botao onclick="clicou()">Clique em mim</button>