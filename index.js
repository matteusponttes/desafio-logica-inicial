let nomeHeroi = "Luffy"
let elo = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let classificacao
let nivel = 4000
let verElo = "sim"
let pocaoCrescimento = 1000

if (verElo === "não"){
    nivel = nivel + pocaoCrescimento
}

if (nivel <= 1000){
    classificacao = elo[0]
}
if ((nivel > 1000) && (nivel <= 2000)){
    classificacao = elo[1]
}
if ((nivel > 2000) && (nivel <= 5000)){
    classificacao = elo[2]
}
if ((nivel > 5000) && (nivel <= 7000)){
    classificacao = elo[3]
}
if ((nivel > 7000) && (nivel <= 8000)){
    classificacao = elo[4]
}
if ((nivel > 8000) && (nivel <= 9000)){
    classificacao = elo[5]
}
if ((nivel > 9000) && (nivel <= 10000)){
    classificacao = elo[6]
}
if (nivel > 10000){
    classificacao = elo[7]
}

if (verElo === "sim"){
    console.log("O Herói de nome '" + nomeHeroi + "' está no nível '" + classificacao + "'.")
}
else{
    console.log("O seu herói ganhou +" + pocaoCrescimento + "XP!")
}