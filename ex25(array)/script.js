let familia = [
    {Name: 'Arthur', year: '24 anos'},
    {Name: 'Belze', year: '26 anos'},
    {Name: 'Bola', year: '63 anos'}
]



familia.sort((a, b) => a.year - b.year);
console.log(familia);

/*familia.sort((a,b) => {
    const yearA = a.year;
    const yearB = b.year

    return yearA - yearB;
}); */




/* familia.sort((a, b) => {
    if (a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else {
        return 0;
    }
}
) */

