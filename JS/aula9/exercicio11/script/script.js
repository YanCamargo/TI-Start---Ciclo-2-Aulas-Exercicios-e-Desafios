function nomeAddBusca(nomes, nomeInserido, indiceElemExib){
    document.write(`Quantidade de elementos do array..: ${nomes.length} <br>`);
    document.write(`Você escolheu o índice ${indiceElemExib}, correspondente ao nome ${nomes[indiceElemExib]}`);
    nomes.push(nomeInserido);
    document.write(`<br>A quantidade atual de elementos é de ${nomes.length}`);
}

listaNome = ["João", "Pedro", "Mariana", "Ana", "Julia"];
nomeIns = prompt("Digite o nome que deseja inserir na lista");
indBusca = prompt("Informe o índice que deseja buscar");

nomeAddBusca(listaNome, nomeIns, indBusca);