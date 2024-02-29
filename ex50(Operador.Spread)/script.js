function addInfo(info){
    let newInfo = {
        ...info,
        status:1,
        token:'akakakak',
        data_cadastro:'01/02/03'
    };
    return newInfo
}


console.log(addInfo({nome:'Arthur', sobrenome:'Vasconcelos'}));