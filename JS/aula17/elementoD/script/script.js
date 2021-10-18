window.onload = function(){
    let produtos = [
        {descricao: 'Biscoito Mirabel', preco: 2.20},
        {descricao: 'Marmelada', preco: 3.20},
        {descricao: 'Sabonete', preco: 4.20}
    ]

    const listaProdutos = document.querySelector("#listaProdutos");
    (()=>{
        for(let pro of produtos){
            const filhoLi = document.createElement('li');
            for(listaP in pro){
                
                listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`;
            }
        }

    })()
}