// function Pessoa(nome){
//     this.nome = nome;

// }

// Pessoa.prototype.msg = function(){
//     alert("Olá " + this.nome);
// }

// let OutraPessoa = new Pessoa("Maria");
// let NovaPessoa = new Pessoa("José");

// NovaPessoa.msg();
// OutraPessoa.msg();

// console.log(NovaPessoa.nome);

// let Pessoa2 = {
//     'nome':'',
//     'idade':''
// }

// // console.log(Pessoa2);
// Pessoa2.__proto__.msg = function(){
//     alert("Olá "+ Pessoa2.nome);
// }
// let P = Pessoa2;
// P.nome = "Marcelo";
// P.msg();
// console.log(P);

let Pessoa3 = [
    {
        'nome':'Marcelo',
        'idade':36,
        'sexo':'M'
    },
    {
        'nome':'Suelem',
        'idade':36,
        'sexo':'F'
    },
    {
        'nome':'Marcos',
        'idade':40, 
        'sexo':'M'
    }
]

let NPessoa = Pessoa3;
console.log(`Existem ${NPessoa.length} cadastradas`);
console.log(NPessoa[1].nome);