//concat( ) "junta" dois ou mais arrays;
// let nomes = ["Marcelo", "Suelem", "Raphael", "Você", "Todos Nós"];
// let nomes2 = ["Pedro", "Paulo", "Maria", "Samanta"];

// let todosOsNomes = nomes.concat(nomes2);
// console.log(todosOsNomes);
// let qntdArrayNome = `O array nomes possui ${nomes.length} elementos`
// console.log(qntdArrayNome);


//indexOf( ) Procura um determinado elemento de um array, retornando uma posição
               //0        1        2         3    
// let nomes2 = ["Pedro", "Paulo", "Maria", "Samanta"];
// console.log(nomes2.indexOf("Maria"));  //Se indexOf retornar -1, o elemento buscado não está no array

//join( ) Transforma elementos de uma array em uma string
// let nomes2 = ["Pedro", "Paulo", "Maria", "Samanta"];
// console.log(nomes2);
// console.log(nomes2.join());

//push( ) insere elementos no fim do array
// let frutas = ["Uva", "Pêra", "Jaca", "Nevascaranga"];
// // frutas.push("Maçã", "Laranja");
// // console.log(frutas);
// let insertFruta = "Melancia";

// if(frutas.indexOf(insertFruta) == -1){
//     console.log(`A fruta ${insertFruta} não está na lista`);
//     frutas.push(insertFruta);
//     console.log(frutas);
// }else{
//     console.log(`A fruta ${insertFruta} está na lista`);
// }


//pop( ) remove o último elemento de um array
// let frutas = ["Uva", "Pêra", "Jaca", "Nevascaranga"];
// frutas.pop();
// console.log(frutas);


//reverse( ) Inverte a ordem dos elementos de um array
// let frutas = ["Uva", "Pêra", "Jaca", "Nevascaranga"];
// frutas.reverse();
// console.log(frutas);


//shift( ) Remove o primeiro elemento de um array
// let frutas = ["Uva", "Pêra", "Jaca", "Nevascaranga"];
// frutas.shift();
// console.log(frutas);


//sort( ) Ordena elementos de um array em ordem crescente
// let numeros = [200, 2, 1, 189, 67];
// let alfa = ['n','p','c','a','b','j'];
// alfa.sort();
// console.log(alfa);

//toString( ) Converte um array em string e retorna esta string
// let frutas = ["Uva", "Pêra", "Jaca", "Nevascaranga"];
// console.log(frutas.toString());

//unshift( ) Insere um elemento no início do array

//splice( ) corta ou remove um elemento de um array em um ponto indicado
//agrupar com indexOf

let nomes = ["Mariana", "Patati Patata", "Xuxa", "Balão Mágico"];
let novosNomes = nomes.splice(0,1); //nomes.splice(indice,qntd de elementos a partir do indice a serem removidos)
console.log(novosNomes); //elementos removidos
console.log(nomes);

