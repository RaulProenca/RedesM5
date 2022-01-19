$(document).ready(function () {
    $("#title1").text("Curso de Formação em jQuery");
    $("#paragrafo").html("<b>3PTGPSI</b>");
    $("input[name=jquery]").val("Curso de Jquery");
    $("input[name=jquery]").attr("placeholder", "Insira um nome");
    $("input[type=button]").val("Enviar");
    $("input[type=button]").click(function (e) { 
        e.preventDefault();
        $("#title1").append(" - AERP");
        $("#paragrafo").prepend("<b>Turma: </b>");
        let data = new Date();
        data = data.getDate() + "-" 
             + data.getMonth() + 1 + "-"
             + data.getFullYear();
        $("#paragrafo").before("<h5>"+data+"</h5>");
        $("#remove").remove();
        $("#title1").addClass("text-primary");
        $("#disciplina").val("RC");
    });
    $("#disciplina").change(function (e) { 
        e.preventDefault();
        alert($("#disciplina option:selected").text());
    });
});