/*
Crie uma função que valide usuário e senha.
Usuário correto: pedro
Senha correta: 123
*/

//Uso da função:

function validationComplete(username, password){
        let validation = username === 'pedro' && password ==='123';
        return validation;
    
    }

let username = 'bonates';
let password = '123';
let validation = validationComplete(username, password);
if (validation) {
    console.log('Acesso concedido.');
} else {
    console.log('Acesso NEGADO!');
}