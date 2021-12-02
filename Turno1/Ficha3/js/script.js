function calcula() {
    let valor1 = document.getElementById("txtValor1");
    let valor2 = document.getElementById("txtValor2");
    let total = document.getElementById("txtTotal");
    total.value = parseInt(valor1.value) +
        parseInt(valor2.value);
}

function adicionar() {
    let lstDisc = document.getElementById("selectDisc"); 
    let lstDiscSel = document.getElementById("selectDiscSel");
    let opcao=lstDisc.options[lstDisc.selectedIndex]; 
    lstDiscSel.options.add(opcao);
}