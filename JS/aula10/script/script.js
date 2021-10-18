//match() O método match procura uma palavra em uma string.
// g/i/m
let nome = "Vitor Yan Camargo";

// console.log(nome.match('C'));

//O método search() procura pela ocorrencia e retorna a posição na string
// console.log(nome.search('C'));
// console.log(nome[10]);

//replace() Este método substitui uma string por outra
// let str = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ab repellat nulla quae,
//  asperiores quidem, mollitia fugiat quod officia corrupti veniam repellendus accusantium sed,
//   voluptatem libero. Veritatis repellendus modi omnis.`;
// let strOutra = str.replace(/i/gi,'y');
// console.log(strOutra);

//localeCompare() efetua a comparação entre duas strings
// let gato = "gato";
// let outroGato = "gato";

// console.log(gato.localeCompare(outroGato));

//toString() converte um valor qualquer em uma string

//toLowerCase() converte uma string inteira para caracteres minúsculos

//toUpperCase() converte uma string inteira para caracteres maiúsculos

//trim() remove espaços antes e depois da string especificada

//NaN
//Qnd uma string for passada para Number(), parseInt() ou parseFloat() e não conseguir efetuar a conversão
//será retornado NaN (Not a Number).
//isNan( ).

// let num = Number('oio');
// console.log(num);
// console.log(isNaN(num));

//toFixed() analisa um valor flutuante e retorna uma string conforme o parâmetro de casas
let valor = 2.456;
console.log(valor.toFixed(2));

//toLocaleString retorna uma string com uma representação da moeda definida no parâmetro currency.
//toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})

console.log(valor.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}));
