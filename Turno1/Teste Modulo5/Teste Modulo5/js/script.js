function trocaImagem() {
    let arvore = document.getElementById('arvore');
    let aleat = Math.floor(Math.random() * 4 + 1);
    arvore.src = "images/arv" + aleat + ".jpg";

    // let arvore = document.getElementById('arvore');
    // let aleat = Math.floor(Math.random() * 4);
    // let arrayImg = ["images/arv1.jpg", "images/arv2.jpg", "images/arv3.jpg", "images/arv4.jpg"];
    // arvore.src = arrayImg[aleat];    

}

function altera() {
    var texto = document.getElementById("texto");
    texto.innerHTML = "Obrigado";
    texto.style.backgroundColor ="#77aa00";
}

function original() {
    var texto = document.getElementById("texto");
    texto.innerHTML = "Passe o rato por cima";
    texto.style.backgroundColor ="#ffaa55";
}


function maiusculas() {
    var txtFrase = document.getElementById('txtFrase');
    var lblFrase = document.getElementById('lblFrase');
    lblFrase.innerHTML = txtFrase.value.toUpperCase();
}

var nums = new Array();
function adicionar() {
    var txtArray = document.getElementById('txtArray');
    nums.push(txtArray.value);
}

function imprimir() {
    var lblValues = document.getElementById('lblValues');
    for (let i = 0; i < nums.length; i++) {
        lblValues.innerHTML += "Elemento no index " +  
                               i + ": " + nums[i] 
                               + "<br>";
    }
} 


function calcular() {
    var rdbV = document.getElementById('rdbV');   
    var txtRaio = document.getElementById('txtRaio');
    var lblRes = document.getElementById('lblRes');
    var raio = txtRaio.value;

    if(rdbV.checked){
        let volume = (4 * Math.PI * Math.pow(raio, 3))/3;   
        lblRes.innerHTML = "O Volume da esfera é: " 
                            + volume + "m<sup>3</sup>"; 
    }else{
        let area = (4 * Math.PI * Math.pow(raio, 2));   
        lblRes.innerHTML = "A área da esfera é: " 
                            + area + "m<sup>2</sup>"; 
    }

}