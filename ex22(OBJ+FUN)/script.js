let pessoa = {
    nome: 'Arthur',
    sobrenome: 'Vasconcelos',
    idade: '24 anos',
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nomeCompleto()+ ' ' + pessoa.idade)