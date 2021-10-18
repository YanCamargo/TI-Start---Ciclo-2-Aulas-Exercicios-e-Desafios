window.onload=function(){
const botao = document.querySelector("#btn");
const txtBox = document.querySelector("#txtBox");
let numeroInf;
const caixaExib = document.querySelector("#dados"); 

botao.addEventListener('click',function(){
    numeroInf=txtBox.value;
    for(i=0;i<=10;i++){
        caixaExib.innerHTML +=`${numeroInf} x ${i} = ${numeroInf*i} <br>`;
    };
})
}
