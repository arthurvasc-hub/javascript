let pessoa = {
    nome: 'tutu',
    sobrenome: 'Vasconcelos',
    idade: 24,
    social: {
        instagram: '@arthurvgl',
        zipzop: '850000-0000'
    }
}, nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
} 


let { nome:pessoaNome, sobrenome, idade} = pessoa;

console.log(pessoaNome, sobrenome, idade = 2);