/* function adicionar(...numeros){
    console.log(numeros);
}

adicionar(5,6,7,8,9) */

function adicionar(nomes, ...novosNomes){
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ]
    return novoConjunto;
}

let nomes = ["Hermildo", "Arthur"];

let outros = adicionar(nomes, "Victor", "Bruno", "Bola")


console.log(outros)