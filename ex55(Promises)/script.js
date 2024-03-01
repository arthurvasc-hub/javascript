// Criação de promessa

const myPromise = new Promise((resolve, reject) => {

    let nome = 'Arthur'
    if( nome === 'Arthur'){
        resolve('O usuário Arthur foi encontrado')
    } else {
        reject('O usuário Arthur não foi encontrado!')
    }
})

myPromise.then((data) => {
    console.log(data);
})

//Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {

    let nome = 'Arthur'
    if( nome === 'Arthur'){
        resolve('O usuário Arthur foi encontrado')
    } else {
        reject('O usuário Arthur não foi encontrado!')
    }
})

myPromise2.then((data) => {
    return data.toLowerCase()
}).then((newString) =>{
    console.log(newString)
}) 

// Retorno do Catch

const myPromise3 = new Promise((resolve, reject) => {

    let nome = 'Tuts'
    if( nome === 'Arthur'){
        resolve('O usuário Arthur foi encontrado')
    } else {
        reject('O usuário Arthur não foi encontrado!')
    }
})

myPromise3.then((data) => {
    console.log(data)
}).catch((erro)=> {
    console.log('Aconteceu um erro:' +erro)
})

//Resolver várias promessas com ''all''

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 OK! Timeout')
    })
})
const p2 = new Promise((resolve, reject) => {
        resolve('P2 OK! Timeout')
    
})
const p3 = new Promise((resolve, reject) => {
        resolve('P3 OK! Timeout')  
})


const allPromises = Promise.all([p1, p2, p3]).then((data)=>
console.log(data)

)

//Resolver várias promessas com ''race''

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 OK! Timeout')
    })
})
const p5 = new Promise((resolve, reject) => {
        resolve('P2 OK! Timeout')
    
})
const p6 = new Promise((resolve, reject) => {
        resolve('P3 OK! Timeout')  
})


const racePromises = Promise.race([p1, p2, p3]).then((data)=>
console.log(data)   
)


// Fetch request na API do GitHub
// Fetch API

const userName = 'arthurvasc-hub'

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response) =>{
    console.log(response)
    return response.json()
}).then((data) =>{
    console.log('O nome do usuário é:' +data.name)
}).catch ((erro)=>{
    console.log(`Houve algum erro: ${err}`)
})