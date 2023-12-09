document.getElementById("verificar").addEventListener("click",function(){

        if(numero % 2===0){
            document.getElementById("verificar")= numero + "é um número par.";
        } else{
            document.getElementById("verificar")= numero +"é um numero impar";
        }
    })
 