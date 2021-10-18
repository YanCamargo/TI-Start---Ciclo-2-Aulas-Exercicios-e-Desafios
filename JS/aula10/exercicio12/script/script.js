analise = function(palavra){
    console.log(`A palavra inserida tem ${palavra.length} caracteres`);
    palavra= palavra.toUpperCase();
    console.log(`A palavra convertida ficou ${palavra}`);
    console.log(`A terceira letra da palavra é ${palavra[2]}`);
    let palavraComX = palavra.replace(palavra[2],'X');
    console.log(`A palavra ${palavra} ficou ${palavraComX}`);
}

let palavra = prompt("Insira uma palavra");
analise(palavra);