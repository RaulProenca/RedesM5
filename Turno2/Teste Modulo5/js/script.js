function trocar() {
    let arvore = document.getElementById("arvore");
    let numA =  Math.floor(Math.random() * 4 + 1);
    arvore.src = "images/arv"+ numA +".jpg";
}

function mudatexto() {
    let divT = document.getElementById("texto");
    divT.innerHTML = "Obrigado";
    divT.style.backgroundColor ="#FFAA55";
}

function original() {
    let divT = document.getElementById("texto");
    divT.innerHTML = "Passe o rato por cima";
    divT.style.backgroundColor ="#77AA00";
}

function maiusculas() {
    let txtFrase = document.getElementById("txtFrase");
    let lblFrase = document.getElementById("lblFrase");
    let maiusc = txtFrase.value.toUpperCase();
    lblFrase.innerHTML = maiusc;
}

var numeros = new Array();
function adicionar() {
    let txtArray = document.getElementById("txtArray");
    numeros.push(txtArray.value);
    txtArray.value = "";
}

function imprimir() {
    let lblValues = document.getElementById("lblValues");
    for (let i = 0; i < numeros.length; i++) {
        lblValues.innerHTML += "Elemento no indice " 
                                + i + ": " + numeros[i]
                                + "<br>";  
    }
}

function calcular() {
    let txtRaio = document.getElementById("txtRaio");
    let lblRes = document.getElementById("lblRes");
    let rdbV = document.getElementById("rdbV");
    if(rdbV.checked){
        let volume = (4 * Math.PI * 
                      Math.pow(txtRaio.value, 3))/3;
        lblRes.innerHTML = "O volume da esfera é: "
                            + volume + "m<sup>3</sup>";   
    }else{
        let area = 4 * Math.PI * 
                      Math.pow(txtRaio.value, 2);
        lblRes.innerHTML = "A área da esfera é: "
                         + area + "m<sup>2</sup>";
    }
    
    
}

