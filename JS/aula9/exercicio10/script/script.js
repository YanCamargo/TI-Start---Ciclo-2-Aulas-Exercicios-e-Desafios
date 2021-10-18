function valorIMC(nome, altura, peso){
    peso = Number(peso);
    altura = Number(altura);
    let imc = peso / (altura*2);

    console.log("Nome..: ", nome);
    console.log("Altura..: ", altura);
    console.log("Peso..: ", peso);
    console.log("IMC..: ", imc);
}
nomePessoa = prompt("Qual o seu nome?");
alturaPessoa = prompt("Informe sua altura");
pesoPessoa = prompt("Informe seu peso");

valorIMC(nomePessoa, alturaPessoa, pesoPessoa);
