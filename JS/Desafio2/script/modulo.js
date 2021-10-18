function buscaCep(){

    let rua = document.querySelector("#rua");
    let bairro = document.querySelector("#bairro");
    let cidade = document.querySelector("#cidade");
    let estado = document.querySelector("#estado")
    function resultadoCep(dadosCep){
        // console.log(dadosCep);
        rua.value = dadosCep["logradouro"];
        bairro.value = dadosCep["bairro"];
        cidade.value = dadosCep["localidade"];
        estado.value = dadosCep["uf"];

        // verificação dos elementos{
        //     "cep": "87076-088",
        //     "logradouro": "Rua José Perez Sanchez Bonilha",
        //     "complemento": "",
        //     "bairro": "Jardim Campo Belo",
        //     "localidade": "Maringá",
        //     "uf": "PR",
        //     "ibge": "4115200",
        //     "gia": "",
        //     "ddd": "44",
        //     "siafi": "7691"
        // }
    }

    let dadosCep = async function(cep){
        let url = `https://viacep.com.br/ws/${cep}/json`;
        try{
            let dadosFetch = await fetch(url);
            let dadosJson = await dadosFetch.json();
            resultadoCep(dadosJson);
        }catch(error){
            alert(error);
        }
    }

    const btnBuscar = document.querySelector("#buscarCep");
    const CEP_= document.querySelector("#cep");

    btnBuscar.addEventListener('click',function(){
    dadosCep(CEP_.value);
    })
}
export{buscaCep};