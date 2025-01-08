

window.onload = function() {
    mudacenario("../imagens_projeto/imagens_fundo/cenario1_escola.jpeg",document.getElementById("fundo_historia"));

    fundos_historia = [
        "../imagens_projeto/imagens_fundo/cenario1_escola.jpeg",
        "../imagens_projeto/imagens_fundo/cenario2_escola.jpeg",
        "../imagens_projeto/imagens_fundo/cenario3_escola.jpeg",
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



// Escola - Cenario 1 
var escola_cenario1_comida_certa = [
    "../imagens_projeto/escola/cenario1/iogurte.png",
    "../imagens_projeto/escola/cenario1/leite_simples.png",
    "../imagens_projeto/escola/cenario1/sumo_laranja.png",
];

var escola_cenario1_comida_errada = [
    "../imagens_projeto/escola/cenario1/croissant_chocolate.png",
    "../imagens_projeto/escola/cenario1/donuts.png",
    "../imagens_projeto/escola/cenario1/fatias_bolo.png",
    "../imagens_projeto/escola/cenario1/leite_achocolatado.png",
];

// Escola - Cenario 2
var escola_cenario2_comida_certa = [
    "../imagens_projeto/escola/cenario2/barra_cereais.png",
    "../imagens_projeto/escola/cenario2/melancia.png",
    "../imagens_projeto/escola/cenario2/morango.png",
    "../imagens_projeto/escola/cenario2/sumo_maca.png",
];

var escola_cenario2_comida_errada = [
    "../imagens_projeto/escola/cenario2/batata_frita_pacote.png",
    "../imagens_projeto/escola/cenario2/coca-cola.png",
    "../imagens_projeto/escola/cenario2/panquecas.png",
    "../imagens_projeto/escola/cenario2/rebucados.png",
];

// Escola - Cenario 3
var escola_cenario3_comida_certa = [
    "../imagens_projeto/escola/cenario3/esparguete.png",
    "../imagens_projeto/escola/cenario3/feijao_preto.png",
    "../imagens_projeto/escola/cenario3/grao_de_bico.png",
    "../imagens_projeto/escola/cenario3/sopa_legumes.png",
    "../imagens_projeto/escola/cenario3/sumo_morago.png",
];

var escola_cenario3_comida_errada = [
    "../imagens_projeto/escola/cenario3/cachorro_quente.png",
    "../imagens_projeto/escola/cenario3/lasanha.png",
    "../imagens_projeto/escola/cenario3/milkshake.jpg",
    "../imagens_projeto/escola/cenario3/nuggets.png",
];

//Props
cenario_props = [ ["../imagens_projeto/escola/cenario1/chaleira.png", //Props 1
                   "../imagens_projeto/escola/cenario1/tijela.png",],
                              // Props2
                  [
                                "../imagens_projeto/escola/cenario2/livro.png",
                                "../imagens_projeto/escola/cenario2/bola_futebol.png", 
                            ],
                            //Props3
                              [
                                "../imagens_projeto/escola/cenario3/pure_prato.png",
                                "../imagens_projeto/escola/cenario3/travessa.png"
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
            certos = selecionarAleatorios(escola_cenario1_comida_certa, 2);
            errados = selecionarAleatorios(escola_cenario1_comida_errada, 2);
            todos = [...certos, ...errados];
            break;
        case 1:
            certos = selecionarAleatorios(escola_cenario2_comida_certa, 2);
            errados = selecionarAleatorios(escola_cenario2_comida_errada, 2);
            todos = [...certos, ...errados];
            break;
        case 2:
            certos = selecionarAleatorios(escola_cenario3_comida_certa, 2);
            errados = selecionarAleatorios(escola_cenario3_comida_errada, 2);
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
}


