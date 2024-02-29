let card = '1234123412341234';


let lastDigits = card.slice(-4);

console.log(`Esse é o seu cartão? ${lastDigits.padStart(16, '*')}`);