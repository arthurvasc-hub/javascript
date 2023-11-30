function maiorDeIdade(idade) {
    if(idade >= 18 && idade < 60){
        return true;
}   else {
    return false;
}
}
function idoso(idade) {
    if(idade >= 60){
        return true;
    }
    else {
        return false;
    }
}
let idade = 16
let verificacao = maiorDeIdade(idade) || idoso(idade)
console.log(verificacao)



if(verificacao){
    console.log('Você é maior de idade')
if else
{
    console.log('Você é um idoso')
}
if else
{ 
    console.log('Você é uma criança')
}

}