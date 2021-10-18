


let numero = prompt("Digite um número entre 1 e 10");

function tabuada(numero){
    if(isNaN(numero) == false){
        console.log(`Foi informado um número`);
        if(numero>=1 && numero<=10){
            console.log(`O número informado é válido`);
            let i = 0;
            while(i<=10){
                console.log(`${numero} x ${i} = ${numero*i}`);
                i++;
            }
        }
    }
}

tabuada(numero);