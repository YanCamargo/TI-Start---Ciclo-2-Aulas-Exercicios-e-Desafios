window.onload=function(){
    let itens = [
        {item: 'Mamão Papaia'},
        {item: 'Laranja'},
        {item: 'Manga'},
        {item: 'Melão'},
        {item: 'Melancia'}
    ]
    let listaItens = document.querySelector("#produtos");
    let listaItenSelec = document.querySelectorAll("#produtos");
    let cesta = document.querySelector("#cestaDoCliente");
    (()=>{
        for(let prod of itens){
            let filhoLi= document.createElement('li');
            for(let lista in prod){
                listaItens.appendChild(filhoLi).textContent = `${prod[lista]}`;
            }
        };
    })();

    listaItenSelec.forEach(function(lista){
        lista.addEventListener('click',function(elemento){
            let filhoLi= document.createElement('li');
            cesta.appendChild(filhoLi).textContent += elemento.target.innerHTML;
            console.log(elemento.target);
        })
    })

        
    

    
    


   
}