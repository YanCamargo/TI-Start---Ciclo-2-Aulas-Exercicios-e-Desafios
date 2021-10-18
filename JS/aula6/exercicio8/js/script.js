    function verifMaior(num1, num2){
        if(num1 == num2){
            console.log("Os números são iguais");
        }else{
            if(num1 > num2){
                console.log("O primeiro número ("+num1+") é maior que o segundo número ("+num2+")");
            }else{
                console.log("O segundo número ("+num2+") é maior que o primeiro número ("+num1+")");
            }
        }
    }

    verifMaior(80, 99);
