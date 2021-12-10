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
    let index = lstDisc.selectedIndex;
    let opcao = lstDisc.options[index]; 
    lstDiscSel.add(opcao);
    lstDiscSel.selectedIndex = -1;
}

function remover() {
    let lstDisc = document.getElementById("selectDisc"); 
    let lstDiscSel = document.getElementById("selectDiscSel");
    let index = lstDiscSel.selectedIndex;
    let opcao = lstDiscSel.options[index]; 
    lstDisc.add(opcao);
    lstDisc.selectedIndex = -1;
}

function trocarImagem() {
    let smile1 = document.getElementById('smile1');
    smile1.src= "images/smile2.png";
}

function original() {
    let smile1 = document.getElementById('smile1');
    smile1.src= "images/smile1.png";
}

function trocaStyle() {
    let lista = document.getElementsByClassName("negrito");
    for (let i = 0; i < lista.length; i++) {
        lista[i].classList.toggle("normal");
    }
}

function adicionarItem() {
    var item = document.getElementById('item').value;
    var lista = document.getElementById('listaIng');
    var li = document.createElement("li");

    var imagem = document.createElement("img");
    imagem.src = "images/lixo.png";
    imagem.onclick = function(){ li.remove(); };
    
    li.innerHTML = item; 
    li.appendChild(imagem);

    lista.appendChild(li);
}

function escreveMsg() {
    var mensagem = document.getElementById('mensagem');
    var nome = document.getElementById('inputNome');
    var morada = document.getElementById('inputMorada');

    // var genM  = document.getElementById('gridRadios1');
    // var genero;
    // if(genM.checked)
    //     genero = "Masculino";
    // else
    //     genero = "Feminino";

    var listGen = document.getElementsByName("gridRadios");
    var genero;
    if(listGen[0].checked)
        genero = "Masculino";
    else
        genero = "Feminino";

    var selPais =  document.getElementById("selectPais");
    var index = selPais.selectedIndex;
    var pais = selPais.options[index].text;    

    var strHobbies = "";
    var listHobbies = document.getElementsByName("hobbies");
    for (let i = 0; i < listHobbies.length; i++) {
        
        if(listHobbies[i].checked){
            strHobbies += listHobbies[i].value + " ";
        }
    } 
    
    mensagem.innerHTML = "Nome: " + nome.value +
                        "<br> Morada: " + morada.value +
                        "<br> Género: " + genero + 
                        "<br> País: " + pais +
                        "<br> Hobbies: " + strHobbies;
}