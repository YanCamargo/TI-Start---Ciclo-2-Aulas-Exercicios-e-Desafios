function kitanda(){
    let itens = [
        {item: 'Mamão Papaia'},
        {item: 'Laranja'},
        {item: 'Manga'},
        {item: 'Melão'},
        {item: 'Melancia'}
    ]

    let precos = [8,9,6,12,7];
    let listaItens = document.querySelector("#produtos");
    let listaItenSelec = document.querySelectorAll("#produtos");
    let cesta = document.querySelector("#cestaDoCliente");
    (()=>{
        let auxiliar1=0;  //Servirá como indice para a criação do atrib. preço 
        for(let prod of itens){
            let filhoLi= document.createElement('li');
            for(let lista in prod){
                listaItens.appendChild(filhoLi).textContent = `${prod[lista]}`;
                filhoLi.dataset.preco= Number(precos[auxiliar1]);
                auxiliar1++;
            }
        };
    })();

    listaItenSelec.forEach(function(lista){
        let auxiliar2;
        lista.addEventListener('click',function(elemento){
            for(let itensSel in cesta){
                if(`#${elemento.target}` !== `#${cesta[itensSel]}`){
                    console.log("Teste")
                }
            }
            let filhoLi= document.createElement('li');
            cesta.appendChild(filhoLi).textContent += elemento.target.innerHTML;
            filhoLi.dataset.preco= elemento.target;
            console.log(elemento.target);
        })
    })


}
export{kitanda};