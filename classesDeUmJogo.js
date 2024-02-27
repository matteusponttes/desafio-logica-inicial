class hero {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
}

let user = new hero("Mateus","28","monge")

let tipo = {
    0: ["guerreiro","espada"],
    1: ["mago","magia"],
    2: ["monge","artes marciais"],
    3: ["ninja","shuriken"]
}

atacar()

function atacar(){
    for(let i = 0; i < 3; i++) {
        if (user.tipo === tipo[i][0]){
            console.log(`O ${tipo[i][0]} atacou usando ${tipo[i][1]}`)
        }
    }
}