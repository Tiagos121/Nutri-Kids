

window.onload = function() {
    mudacenario("../imagens_projeto/imagens_fundo/cenario1_natal.jpeg",document.getElementById("fundo_historia"));
    loadPersonagem();
    fundos_historia = [
        "../imagens_projeto/imagens_fundo/cenario1_natal.jpeg",
        "../imagens_projeto/imagens_fundo/cenario2_natal.jpeg",
        "../imagens_projeto/imagens_fundo/cenario3_natal.jpeg",
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



// Natal - Cenario 1 
var natal_cenario1_comida_certa = [
    "../imagens_projeto/natal/cenario1/legumes_cozidos.png",
    "../imagens_projeto/natal/cenario1/lentilhas.png",
    "../imagens_projeto/natal/cenario1/nozes.png",
    "../imagens_projeto/natal/cenario1/peru_assado.png",
];

var natal_cenario1_comida_errada = [
    "../imagens_projeto/natal/cenario1/pure_creme.png",
    "../imagens_projeto/natal/cenario1/rolo_carne.png",
    "../imagens_projeto/natal/cenario1/torta_carne.png",
];

// Natal - Cenario 2
var natal_cenario2_comida_certa = [
    "../imagens_projeto/natal/cenario2/aletria.png",
    "../imagens_projeto/natal/cenario2/gelatina_caseira.png",
    "../imagens_projeto/natal/cenario2/salada_frutas.png",
];

var natal_cenario2_comida_errada = [
    "../imagens_projeto/natal/cenario2/chocolate_leite.png",
    "../imagens_projeto/natal/cenario2/pudim.png",
    "../imagens_projeto/natal/cenario2/torta_creme.png",
];

// Natal - Cenario 3
var natal_cenario3_comida_certa = [
    "../imagens_projeto/natal/cenario3/bolachas_integrais.png",
    "../imagens_projeto/natal/cenario3/cha.png",
    "../imagens_projeto/natal/cenario3/uvas_passas.png",
];

var natal_cenario3_comida_errada = [
    "../imagens_projeto/natal/cenario3/chocolate_quente.png",
    "../imagens_projeto/natal/cenario3/pretzel.png",
    "../imagens_projeto/natal/cenario3/waffle_chocolate.png",
];

//Props
cenario_props = [ ["../imagens_projeto/natal/cenario1/mini_arvore.png", //Props 1
                   "../imagens_projeto/natal/cenario1/sinos_natal.png",],
                              // Props2
                  [
                                "../imagens_projeto/natal/cenario2/bolacha_natal.png",
                                "../imagens_projeto/natal/cenario2/cesta_paes.png", 
                            ],
                            //Props3
                              [
                                "../imagens_projeto/natal/cenario3/prenda_natal.png",
                                "../imagens_projeto/natal/cenario3/boneco_neve.png"
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
            certos = selecionarAleatorios(natal_cenario1_comida_certa, 2);
            errados = selecionarAleatorios(natal_cenario1_comida_errada, 2);
            todos = [...certos, ...errados];
            break;
        case 1:
            certos = selecionarAleatorios(natal_cenario2_comida_certa, 2);
            errados = selecionarAleatorios(natal_cenario2_comida_errada, 2);
            todos = [...certos, ...errados];
            break;
        case 2:
            certos = selecionarAleatorios(natal_cenario3_comida_certa, 2);
            errados = selecionarAleatorios(natal_cenario3_comida_errada, 2);
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
