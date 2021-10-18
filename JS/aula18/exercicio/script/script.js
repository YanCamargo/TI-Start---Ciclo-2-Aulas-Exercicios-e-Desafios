window.onload = function(){
    let veiculos = ['Ônibus','Motocicleta','Patinete'];

    const btnBuscar = document.querySelector("#gerarLista");
    const lista = document.querySelector("#veiculos");

    btnBuscar.addEventListener('click',()=>{
        for(veic of veiculos){
            let li = document.createElement('li');
            lista.appendChild(li).textContent = veic;
        }
    })
}