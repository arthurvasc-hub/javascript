
// Calcule a porcentagem entre 2 números.


function calcPct(x, y){
    let pct = ((y / x) * 100)
      return pct;
}
let x = 40;
let y = 10;
let pct = calcPct(x, y)

console.log(`${pct}% de ${x} é ${y}`);