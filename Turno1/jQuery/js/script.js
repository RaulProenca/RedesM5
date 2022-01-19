$(document).ready(function () {
    $("p").css("color", "purple");
    $("p.red").css("color", "red");

    $("*").css("font-family", "Verdana");
    $("#p1").css("text-align", "center");

    $("button").click(function (e) { 
        e.preventDefault();
        $("p.red").hide();
    });

    $("#btn1").click(function (e) { 
        e.preventDefault();
        $("p.red").show();
    });

    $("li:first, li:last").css("font-weight", "bold");
    $("li:even").css("color", "green");
    $("li:odd").css("color", "orange");
    $("li:eq(2)").css("text-decoration", "underline");
    $("li:gt(2)").css("background-color", "yellow");
    $("li:lt(3)").css("background-color", "lightblue");

    $(":header").css("text-align", "center");

});


