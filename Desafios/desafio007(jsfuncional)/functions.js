const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    deffense:0

}


const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        deffense: 8
    }
}

const createSorcerer = (name) => {
    return{
        ...defaultCharacter,
        name,
        life: 50,
        maxLife: 50,
        attack:20,
        deffense: 3
    }
}

const createPoring = () => {
    return {
        ...defaultCharacter,
        name: 'Poring', 
        life: 40,
        maxLife: 40,
        attack: 4, 
        deffense: 4
    }
}

const createBaphomet = () => {
    return{
        ...defaultCharacter,
        name: 'Baphomet',
        life: 120,
        maxLife: 120,
        attack: 10,
        deffense: 5
    }
}


const stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,

    start(fighter1, fighter2,fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

        this.update();
    },
    update(){
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP `;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP `;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;
    },
    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            log.addMessage('Ja acabou a brincadeira filho...');
            return;
        }
        const attackFactor = (Math.random() * 2).toFixed(2);
        const deffensFactor = (Math.random()* 2).toFixed(2);

        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attacked.deffense * deffensFactor;

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMessage(`${attacking.name} causou ${actualAttack} de dano em ${attacked.name}`);
        } else {
            log.addMessage(`${attacked.name} conseguiu defender...`)
        }

        this.update();
    }
}

const log = {
    list: [],
    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },
    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHtml = '';

        for (let i in this.list){
            logEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}
