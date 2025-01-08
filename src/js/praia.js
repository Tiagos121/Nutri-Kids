

window.onload = function() {
    mudacenario("../imagens_projeto/imagens_fundo/cenario1_praia.jpeg",document.getElementById("fundo_historia"));

    fundos_historia = [
        "../imagens_projeto/imagens_fundo/cenario1_praia.jpeg",
        "../imagens_projeto/imagens_fundo/cenario2_praia.jpeg",
        "../imagens_projeto/imagens_fundo/cenario3_praia.jpeg",
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



// Praia - Cenario 
var praia_cenario1_comida_certa = [
    "../imagens_projeto/praia/cenario1/agua_coco.png",
    "../imagens_projeto/praia/cenario1/agua.png",
    "../imagens_projeto/praia/cenario1/banana.png",
    "../imagens_projeto/praia/cenario1/maca.png",
    "../imagens_projeto/praia/cenario1/sanduiche.png",
    "../imagens_projeto/praia/cenario1/uvas.png",
];

var praia_cenario1_comida_errada = [
    "../imagens_projeto/praia/cenario1/bolacha_recheada.png",
    "../imagens_projeto/praia/cenario1/churros.png",
    "../imagens_projeto/praia/cenario1/refrigerante.png",
    "../imagens_projeto/praia/cenario1/sumo_em_po.png",
];


// Praia - Cenario 2
var praia_cenario2_comida_certa = [
    "../imagens_projeto/praia/cenario2/castanhas.png",
    "../imagens_projeto/praia/cenario2/cenoura_baby.png",
    "../imagens_projeto/praia/cenario2/pepino_palitos.png",
    "../imagens_projeto/praia/cenario2/torrada.png",
];

var praia_cenario2_comida_errada = [
    "../imagens_projeto/praia/cenario2/algodao_doce.png",
    "../imagens_projeto/praia/cenario2/gelado.png",
    "../imagens_projeto/praia/cenario2/pipocas.png",
];

// Praia - Cenario 3
var praia_cenario3_comida_certa = [
    "../imagens_projeto/praia/cenario3/arroz.png",
    "../imagens_projeto/praia/cenario3/limonada.png",
    "../imagens_projeto/praia/cenario3/peixe_grelhado.png",
    "../imagens_projeto/praia/cenario3/salada.png",
];

var praia_cenario3_comida_errada = [
    "../imagens_projeto/praia/cenario3/fritas_palitos.png",
    "../imagens_projeto/praia/cenario3/hamburger.png",
    "../imagens_projeto/praia/cenario3/pizza.png",
];

//Props
cenario_props = [ ["../imagens_projeto/praia/cenario1/guarda_sol.png", //Props 1
                   "../imagens_projeto/praia/cenario1/balde_areia.png",],
                              // Props2
                  [
                                "../imagens_projeto/praia/cenario2/bola_praia.png",
                                "../imagens_projeto/praia/cenario2/praia_pa.png", 
                            ],
                            //Props3
                              [
                                "../imagens_projeto/praia/cenario3/bebedouro.png",
                                "../imagens_projeto/praia/cenario3/prato.png"
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
            certos = selecionarAleatorios(praia_cenario1_comida_certa, 2);
            errados = selecionarAleatorios(praia_cenario1_comida_errada, 2);
            todos = [...certos, ...errados];
            break;
        case 1:
            certos = selecionarAleatorios(praia_cenario2_comida_certa, 2);
            errados = selecionarAleatorios(praia_cenario2_comida_errada, 2);
            todos = [...certos, ...errados];
            break;
        case 2:
            certos = selecionarAleatorios(praia_cenario3_comida_certa, 2);
            errados = selecionarAleatorios(praia_cenario3_comida_errada, 2);
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
        div.setAttribute("onclick", "toggleSelection(this)");

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

    document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao}`;

    
}


function verificarPontuacao(alimentoSelecionado) {
    const alimentosCertos = {
        0: praia_cenario1_comida_certa,
        1: praia_cenario2_comida_certa,
        2: praia_cenario3_comida_certa,
    }[cenario] || [];

    if (alimentosCertos.includes(alimentoSelecionado)) {
        pontuacao++;
        console.log("Pontuação atual: ", pontuacao);
    }
}