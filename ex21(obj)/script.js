let personagem = {
    nome: 'Arthur',
    idade: 24,
    pais: 'Brasil',
    profissao: ['alquimia', 'coletor', 'minerador'],

    status: {
    forca: 20,
    inteligencia: 5,
    stamina:15
    }
}

console.log(`${personagem.nome} tem ${personagem.idade} anos.`)
console.log(`e possui ${personagem.status.forca} de status STR `);
console.log(personagem.profissao[1]);