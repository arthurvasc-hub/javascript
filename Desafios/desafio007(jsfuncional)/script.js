const char = createSorcerer('Misso');
const monster = createBaphomet();

stage.start(
    char, 
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)