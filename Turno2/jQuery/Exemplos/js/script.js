$(document).ready(function () {

    $("p").css('color', 'blue');
    $("#p2").css('color', 'red');

    $("*").css('font-weight', 'bold');

    $("div h1").hide();

    $("button").click(function (e) { 
        e.preventDefault();
        //$("div h1:visible").hide();
        //$("div h1:hidden").show();
        $("div h1").show();
    });    

    $("li:first").css("color", "green");
    $("li:last").css("color", "orange");
    $("li:even").css("font-family", "Verdana");
    $("li:odd").css("font-family", "Comic Sans Ms");

    $("li:eq(2)").css("text-decoration", "underline");
    $("li:gt(2)").css("font-style", "oblique");
    $("li:lt(3)").css("background-color", "yellow");

    $("p").not("#p1").html("Hoje está um belo dia!");

    $(":header").css("text-align", "center");

    $("#div1 p, #div1 span").css("font-size", "25px");

    $("input[name='txtNome']").val("Insira um  nome");

    
});