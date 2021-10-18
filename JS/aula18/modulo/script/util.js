    function calcular( idProduto, resultado){
        const preco = document.querySelectorAll(`#${idProduto} > li`);
        const valorResultado = document.querySelector(`#${resultado}`);
        let totalPreco=0;
        for(let i of preco){
            totalPreco += Number(i.dataset.preco);

        }


        valorResultado.value = totalPreco;
    }


    function removerProdutos(id){
        const lista = document.querySelectorAll(`#${id} > li`);
        for(let produto of lista){
            produto.addEventListener('click',function(){
                produto.remove();
                calcular('produtos','SomaTotal');
            })
        }
    }

    removerProdutos('produtos');
    calcular('produtos','SomaTotal');

export{calcular, removerProdutos};