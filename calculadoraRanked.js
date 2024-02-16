let vitoria = 35
let derrota = 2
let elo

function saldo (){
    resultado = vitoria - derrota
    return
}

saldo();

if (resultado <= 10){
    elo = "Ferro"
}
if ((resultado > 10) && (resultado <= 20)){
    elo = "Bronze"
}
if ((resultado > 20) && (resultado <= 50)){
    elo = "Prata"
}
if ((resultado > 50) && (resultado <= 80)){
    elo = "Ouro"
}
if ((resultado > 80) && (resultado <= 90)){
    elo = "Diamante"
}
if ((resultado > 90) && (resultado <= 100)){
    elo = "Lendário"
}
if (resultado > 100){
    elo = "Imortal"
}

console.log("O Herói tem de saldo de **" + resultado + "** e está no nível **" + elo + "**")