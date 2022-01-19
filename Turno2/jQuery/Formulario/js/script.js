$(document).ready(function () {
    
    $("#btnCusto").click(function (e) { 
        e.preventDefault();
        let nDias = $("#nDias").val();
        let nseg = 0;

        // let segmento = $("input[name=segmento]:checked").val();
        // if(segmento == "Carrinha/Combi (+5€/dia)"){
        //     nseg = 5;
        // }else if (segmento == "SUV/Monovolume (+10€/dia)") {
        //     nseg = 10;
        // }

        let extras = 0;

        $("input[name=segmento]").each(function (index, element) {
            if(element.checked){
                nseg = 5 * index;   
            }
        });
        
        let nomeExtras = "";
        $("input[name=extras]").each(function (index, element) {
            // element == this
            if(element.checked){
                extras++;
                nomeExtras += $(element).val() + "<br>";
            }
        });

        $("#resultado").val(nDias * 25 + nseg * nDias + extras*15);

        let strDias = "Nº Dias: " + nDias;
        let marca = "Marca: " + $("#marca option:selected").text();
        let segmento ="Segmento: " 
                     + $("input[name=segmento]:checked").val();
        let nExtras = "Extras: " + nomeExtras;

        $("#opcoes").html(strDias + "<br>" + marca + "<br>" 
                        + segmento + "<br>" + nExtras );


    });
    
    



});