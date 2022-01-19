function maiusculas(frase) {
    var palavras = frase.split(" ");

    for (let i = 0; i < palavras.length; i++) {
        var letra = palavras[i].charAt(0).toUpperCase();
        palavras[i] = letra + palavras[i].slice(1);
    }
    return palavras.join(" ");
}

function ordenaString(str){
    var listaChar = str.split('');
    listaChar = listaChar.sort();
    return listaChar.join('');
}

function calculaIdade(dataNasc) {
    var data = new Date();
    var idade = data.getFullYear() - dataNasc.getFullYear();
    if(data.getMonth() < dataNasc.getMonth())
        idade--;
    else if(data.getMonth() == dataNasc.getMonth()){
        if(data.getDate() < dataNasc.getDate())
            idade--;
        }
    return idade;  
}
