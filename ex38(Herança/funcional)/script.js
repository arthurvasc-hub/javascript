const defaultUser = {
    name:'',
    email:'',
    level: 1
}

let user1 = {
    ...defaultUser,   //... Para herdar
    name: 'Bonieky',
    email: 'suporte@b7web.com.br'
}


let adm1 = {
    ...defaultUser,
    name: 'Admin Bolado',
    email: 'adm@admbolado.com.br',
    level: 2
}