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
    var index = select1.selectedIndex; //índice
    var option = select1.options[index]; //opção
    select2.add(option);//Adiciona a opção ao select2
    select2.selectedIndex = -1; //remover a seleção
}

function remover() {
    var select1 = document.getElementById("selectDisc"); 
    var select2 = document.getElementById("selectDiscSel"); 
    var index = select2.selectedIndex; //índice
    var option = select2.options[index]; //opção
    select1.add(option);//Adiciona a opção ao select1
    select1.selectedIndex = -1; //remover a seleção
}

function mudaImagem() {
    var smile1 = document.getElementById('smile1');
    smile1.src = "images/smile2.png";
}

function original() {
    var smile1 = document.getElementById('smile1');
    smile1.src = "images/smile1.png";
}

function mudaClasse() {
    var listPalavras = document.getElementsByClassName("negrito");
    for (let i = 0; i < listPalavras.length; i++) {
        listPalavras[i].classList.toggle("normal");
    }
}

function listaCompras() {
    var item = document.getElementById('item');
    var listaIng = document.getElementById('listaIng');
    var li = document.createElement('li');
    var imagem = document.createElement('img');
    imagem.src = "images/lixo.png";
    imagem.onclick = function elimina() {
        li.remove();
    }
    li.innerHTML = item.value;
    li.appendChild(imagem);
    listaIng.appendChild(li);
}

function enviarMsg() {
    var nome = document.getElementById("inputNome");
    var morada = document.getElementById("inputMorada");
    var listGen = document.getElementsByName("gridRadios");
    
    var selectPais = document.getElementById("selectPais");
    var indice = selectPais.selectedIndex;
    var pais = selectPais.options[indice].text;

    var listHobbies = document.getElementsByName("hobbies");
    var hobbies = "";
    for (let i = 0; i < listHobbies.length; i++) {
        if(listHobbies[i].checked){
            hobbies += listHobbies[i].value + " ";
        }
    }

    var mensagem = document.getElementById("mensagem");
    var genero;

    if(listGen[0].checked)
        genero = "Masculino";
    else
        genero = "Feminino";

    mensagem.innerHTML = "Nome: " + nome.value + "<br>" 
                      +" Morada: " + morada.value + "<br>"
                      +" Género: " + genero + "<br>"
                      +" País: " + pais + "<br>"
                      +" Hobbies: " + hobbies;
}