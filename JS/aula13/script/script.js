// let Pessoas = {
//     nome: "Steven Rogers",
//     idade: 90,
//     heroi: "Capitão América",
// }

// for( let propriedades in Pessoas){
//     console.log(Pessoas.nome);
//     console.log(Pessoas.idade);
//     console.log(Pessoas.heroi);
// }

// let frutas = ["Melancia", "Manga", "Banana", "Uva"];
// for (let nomeFruta of frutas){
//     console.log(nomeFruta);
// }

let Herois = [
    {
        identidadeSecreta: "Steven Rogers",
        heroi: "Capitão América",
    },
    {
        identidadeSecreta: "Tony Stark",
        heroi: "Homem de Ferro",
    }
];

Herois.push({identidadeSecreta: "Diana", heroi: "Mulher Maravilha"});

for(let marvel of Herois){
    // console.log(marvel);
    for(let m in marvel){
        console.log(`${m}: ${marvel[m]}`);
    }
}