//Template String
let str = `Qualquer conteúdo!`;

let str2 = `Uma outra string ${str}`;

console.log(str2);

//Arrays
const frutas = ["Uva", "Banana", "Laranja", "Melancia"];
let euGosto = `Eu gosto de ${frutas[0]}`;
console.log(euGosto); //uva

const pessoa = [
    "José", //0
    23, //1
    "Solteiro", //2
    "Bola", //3
    1.70, //4
    cores= ["azul","preto","vermelho","salmão"] //5
];

console.log(pessoa.length);
console.log("Vitor".length);
console.log(pessoa[5][0]); //Array bidimensional 


// (function(pessoa){
//     const jose = `Meu nome é ${pessoa[0]} e eu tenho ${pessoa[1]} anos e sou ${pessoa[2]} eu também gosto
//     de jogar ${pessoa[3]}. Minha altura é ${pessoa[4]}`;   
//     document.write(jose); 
// })(pessoa)
