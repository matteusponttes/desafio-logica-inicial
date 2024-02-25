let hero = {
    nome: "mateus",
    idade: 28,
    tipo: {
        0: ["guerreiro","espada"],
        1: ["mago","magia"],
        2: ["monge","artes marciais"],
        3: ["ninja","shuriken"]
    }
//["guerreiro", "mago", "monge", "ninja"]
}

atacar()

function atacar(){
    console.log(`O ${hero.tipo[0][0]} atacou usando ${hero.tipo[0][1]}`)
}