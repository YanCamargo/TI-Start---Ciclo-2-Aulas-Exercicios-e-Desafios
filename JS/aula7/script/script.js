function teste(){
    let nome= "Vitor";
    return nome;
}
console.log(teste());
let msg= ()=>{
    alert("Estou feliz da vida com JS");
}
msg();

(function(){
    alert("Esta função se executou sozinha");
})();

(function(produto, preco){
    alert("O produto é "+produto+" e o preço é de R$ "+preco);
})("Biscoito", 2.35)

let v1= prompt("Digite o valor 1");
let v2= prompt("Digite o valor 2");

const soma = (valor1, valor2)=>{
    let resultado = Number(valor1) + Number(valor2);
    console.log(resultado);
}

soma(v1, v2);