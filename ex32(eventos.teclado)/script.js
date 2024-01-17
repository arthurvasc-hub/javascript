
function soltou(e) {
        console.log('TECLA APERTADA ' + e.key);
        console.log('SFHIT? ' + e.shiftKey); //e.key - e.code - e.altKey - e.ctrlKey
        console.log('--')
}

const input = document.querySelector('input')
input.addEventListener('keyup', soltou);
