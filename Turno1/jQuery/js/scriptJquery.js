$(document).ready(function () {
    $("#title1").text("Curso de Formação em JQuery");
    $("#paragrafo").html("<b>3PTGPSI</b>");
    $("input[name=jquery]").val("Curso de Jquery");
    $("input[type=button]").val("Enviar");
    $("input[type=button]").click(function (e) { 
        e.preventDefault();
        $("#title1").append(" - AERP");
        $("#paragrafo").prepend("<b>Turma: </b>");
        let data = new Date();
        data = data.getDate() + "-"
             + (data.getMonth()+1) + "-" 
             + data.getFullYear();
        $("#paragrafo").before("<h5>"+ data +"</h5>");
        $("#remove").remove();
        $("#title1").addClass("text-primary");
        $("select[name=disciplina]").val("RC");
    });
    $("select[name=disciplina]").change(function (e) { 
        e.preventDefault();
        alert($("#disciplina option:selected").text());
    });
    
});