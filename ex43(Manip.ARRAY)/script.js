let lista = [
    {id:1, nome: 'Tutu', sobrenome: 'Vasconcelos'},
    {id:2, nome: 'Damzik', sobrenome: 'Shadow'},
    {id:3, nome: 'Massica', sobrenome: 'Margay'}
];

let pessoa = lista.find(function(x){
    return (x.sobrenome == 'Margay')? true : false;
})





let res = pessoa;

console.log(res)