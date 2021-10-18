let Frutas = [
    {
        nome: "Banana",
        preco: "R$ 2,60 kg"
    },
    {
        nome: "Uva",
        preco: "R$ 9,00 kg"
    },
    {
        nome: "Laranja",
        preco: "R$ 6,00 kg"
    }
];

function listaFrutas(Frutas){
    for(let itens of Frutas){
        for(let detalhe in itens){
            console.log(`${detalhe}: ${itens[detalhe]}`);
        }
    }
}

listaFrutas(Frutas);