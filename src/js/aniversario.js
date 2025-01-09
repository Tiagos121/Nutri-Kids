

window.onload = function() {
    mudacenario("../imagens_projeto/imagens_fundo/cenario1_aniversario.jpeg",document.getElementById("fundo_historia"));
    loadPersonagem();
    fundos_historia = [
        "../imagens_projeto/imagens_fundo/cenario1_aniversario.jpeg",
        "../imagens_projeto/imagens_fundo/cenario2_aniversario.jpg",
        "../imagens_projeto/imagens_fundo/cenario3_aniversario.jpeg",
    ];
    document.getElementById("caixa").style.display = "none";
    

    document.getElementById("img-posi-esquerda").onclick = function () {
        lastClickedButton = "esquerda"; // Registra que o botão esquerdo foi clicado
        document.getElementById("img-posi-esquerda").disabled = true;
        document.getElementById("img-posi-direita").disabled = true;
        document.getElementById("caixa").style.display = "block";
    
        const audio = new Audio('../audio/somclick.mp3');
        audio.play();
        mostrarAlimentos();
    };
    
    document.getElementById("img-posi-direita").onclick = function () {
        lastClickedButton = "direita"; // Registra que o botão direito foi clicado
        document.getElementById("img-posi-direita").disabled = true;
        document.getElementById("img-posi-esquerda").disabled = true;
        document.getElementById("caixa").style.display = "block";
    
        const audio = new Audio('../audio/somclick.mp3');
        audio.play();
        mostrarAlimentos();
    };

    // Cria o listener para o array condicoes
    condicoes = criarListener(fundos_historia, (novoArray) => {
        console.log("Callback executado! Condições agora são:", novoArray);
    });
}



// Aniversário - Cenario 1 
var aniversario_cenario1_comida_certa = [
    "../imagens_projeto/aniversario/cenario1/espeto_frutas.png",
    "../imagens_projeto/aniversario/cenario1/ovo_cozido.png",
    "../imagens_projeto/aniversario/cenario1/sandes_queijo.png",
];

var aniversario_cenario1_comida_errada = [
    "../imagens_projeto/aniversario/cenario1/bolas_queijo.png",
    "../imagens_projeto/aniversario/cenario1/coxinha.png",
    "../imagens_projeto/aniversario/cenario1/quiche.png",
];

// Aniversário - Cenario 2
var aniversario_cenario2_comida_certa = [
    "../imagens_projeto/aniversario/cenario2/cupcake_mirtilo.png",
    "../imagens_projeto/aniversario/cenario2/rodelas_ananas.png",
    "../imagens_projeto/aniversario/cenario2/tosta_kiwi.png",
];

var aniversario_cenario2_comida_errada = [
    "../imagens_projeto/aniversario/cenario2/brigadeiro.png",
    "../imagens_projeto/aniversario/cenario2/chupa_chupa.png",
    "../imagens_projeto/aniversario/cenario2/gomas.png",
];

// Aniversário - Cenario 3
var aniversario_cenario3_comida_certa = [
    "../imagens_projeto/aniversario/cenario3/bolo_simples.png",
    "../imagens_projeto/aniversario/cenario3/sumo_melancia.png",
    "../imagens_projeto/aniversario/cenario3/tarte_maca.png",
];

var aniversario_cenario3_comida_errada = [
    "../imagens_projeto/aniversario/cenario3/bolo_recheado.png",
    "../imagens_projeto/aniversario/cenario3/gelado_caixa.png",
    "../imagens_projeto/aniversario/cenario3/pintarolas.png",
];

//Props
cenario_props = [ ["../imagens_projeto/aniversario/cenario1/bandeja.png", //Props 1
                   "../imagens_projeto/aniversario/cenario1/balao_anos.png",],
                              // Props2
                  [
                                "../imagens_projeto/aniversario/cenario2/pote_doces.png",
                                "../imagens_projeto/aniversario/cenario2/tijela_frutas.png", 
                            ],
                            //Props3
                              [
                                "../imagens_projeto/aniversario/cenario3/fatia_bolo.png",
                                "../imagens_projeto/aniversario/cenario3/chapeu_aniversario.png"
                              ],  
];





function selecionarAleatorios(array, quantidade) {
    const selecionados = [];
    const copia = [...array]; // Faz uma cópia do array para evitar modificar o original

    for (let i = 0; i < quantidade; i++) {
        const indice = Math.floor(Math.random() * copia.length);
        selecionados.push(copia.splice(indice, 1)[0]); // Remove o item e adiciona à lista
    }

    return selecionados;
}

// Função para mostrar os alimentos
function mostrarAlimentos() {
    // Seleciona 2 alimentos certos e 2 errados
    var certos;
    var errados;
    var todos
    switch(cenario){
        case 0:
            certos = selecionarAleatorios(aniversario_cenario1_comida_certa, 2);
            errados = selecionarAleatorios(aniversario_cenario1_comida_errada, 2);
            todos = [...certos, ...errados];
            break;
        case 1:
            certos = selecionarAleatorios(aniversario_cenario2_comida_certa, 2);
            errados = selecionarAleatorios(aniversario_cenario2_comida_errada, 2);
            todos = [...certos, ...errados];
            break;
        case 2:
            certos = selecionarAleatorios(aniversario_cenario3_comida_certa, 2);
            errados = selecionarAleatorios(aniversario_cenario3_comida_errada, 2);
            todos = [...certos, ...errados];
            break;
    }


    // Referência ao container de alimentos
    const container = document.getElementById("grid-items");
    container.innerHTML = ""; // Limpa os itens anteriores

    // Adiciona cada alimento ao container
    todos.forEach((alimento) => {
        const div = document.createElement("div");
        div.className = "food-item";
        div.setAttribute("onclick", "toggleSelection(this);");
        
        if (certos.includes(alimento)) {
            div.setAttribute("valor", "certo");
        } else if (errados.includes(alimento)) {
            div.setAttribute("valor", "errado");
        }
        const img = document.createElement("img");
        img.src = alimento;
        img.alt = "Alimento";
        img.onclick = function () {
            const audio = new Audio("../audio/somclick.mp3");
            audio.play();
        };

        div.appendChild(img);
        container.appendChild(div);
    });

    // Exibe a caixa
    document.getElementById("caixa").style.display = "block";
}
