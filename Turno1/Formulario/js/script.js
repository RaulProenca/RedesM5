function custoFinal() {
    var inputDias = document.getElementById("nDias");
    var inputRes = document.getElementById("resultado");
    var nDias = parseInt(inputDias.value);
    var inputSegmento = document.getElementsByName("segmento");
    var inputExtras = document.getElementsByName("extras");
    var labelOpcoes = document.getElementById("opcoes");
    var segmento = 0, extras = 0;
    var segmentoDesc = "Utilitário/Sedan"; 
    var extrasDesc = "";

    if(inputSegmento[1].checked){
        segmento =  5 * nDias;
        segmentoDesc = inputSegmento[1].value;
    }else if(inputSegmento[2].checked){
        segmento =  10 * nDias;
        segmentoDesc = inputSegmento[2].value;
    }

    for (let i = 0; i < inputExtras.length; i++) {
        if(inputExtras[i].checked){
            extras += 15;
            extrasDesc += inputExtras[i].value + " ";
        }
    }
    inputRes.value = nDias * 25 + segmento + extras + "€" ;

    var selectMarca = document.getElementById("marca");
    var indice = selectMarca.selectedIndex;
    var marca = selectMarca[indice].text;

    labelOpcoes.innerHTML = "Dias: " + nDias + "<br>"
                          + " Marca: " + marca + "<br>"
                          + " Segmento: " + segmentoDesc + "<br>"
                          + " Extras: " + extrasDesc;
}