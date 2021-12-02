function calcular() {
var txtValor1 = document.getElementById("txtValor1"); 
var txtValor2 = document.getElementById("txtValor2"); 
var txtTotal = document.getElementById("txtTotal"); 
txtTotal.value = parseInt(txtValor1.value) + 
                 parseInt(txtValor2.value);
}

function adicionar() {
    var select1 = document.getElementById("selectDisc"); 
    var select2 = document.getElementById("selectDiscSel"); 
    var index = select1.selectedIndex;
    //alert(index);
}