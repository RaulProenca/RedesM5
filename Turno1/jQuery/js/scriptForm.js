$(document).ready(function () {

    $("#btnCusto").click(function (e) { 
        e.preventDefault();
        let nDias = $("#nDias").val();
        let seg, extras = 0;

        $("input[name=segmento]").each(function (index, element) {
            // element == this
            if(element.checked)
                seg = index * 5;
        });

        let strExtras = "Extras: ";
        $("input[name=extras]").each(function (index, element) {
            // element == this
            if(element.checked){
                extras += 15;
                strExtras += $(element).val() + "<br>"; 
            }
        });

        $("#resultado").val(nDias * 25 + nDias * seg + extras);

        let strDias = "Nº Dias " + nDias;
        let strMarca  = "Marca: " + 
                     $("#marca option:selected").text();
        let strSeg = "Segmento: " + 
                     $("input[name=segmento]:checked").val();

        $("#opcoes").html(strDias + "<br>" 
                        + strMarca + "<br>"
                        + strSeg + "<br>"
                        + strExtras);

    });
    
});