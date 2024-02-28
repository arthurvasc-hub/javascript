let pessoa = {
    nome: 'tutu',
    sobrenome: 'Vasconcelos',
    idade: 24,
    social: {
        instagram: {
            url: '@arthurvgl',
            seguidores: 1000
        },
        zipzop: '850000-0000'
    }
} 

function pegarNomeCompleto(nome = 'Arthur', sobrenome){
     return `${nome} ${sobrenome}`
    
}

console.log(pegarNomeCompleto(pessoa))