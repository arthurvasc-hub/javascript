
/* Calcule o preço do imóvel 
- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1,5x
Uso da função:
*/

function calcularImovel(metragem, quartos){
    let m2 = 3000;
    let custo = 0;
    switch(quartos){
        case 1:
        default:
        return custo = (m2 * metragem)
        case 2:
        return custo = (m2 * metragem) * 1.2
        case 3:
        return custo = (m2 * metragem) * 1.5
    }
    
        

} 
let metragem = 123;
let quartos = 1;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);

