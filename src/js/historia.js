var fundo;
//Condicoes cenario
var condicoes = [false,false];
//Muda cenario
function mudacenario(pathCenario){
    console.log(pathCenario);
    fundo.src = pathCenario;
}
    
function verificaAcao (objeto){ //Recebe objeto clicado para confirmar se corresponde a uma ação correta || Exemplo de atributos de objeto clicavel : valor=certo/errado
    if(objeto.valor == "certo"){
        // Verifica se já existem dois valores 'true' em 'condicoes'
        const trueCount = condicoes.filter(cond => cond).length;
        
        // Apenas marca 'true' se houver espaço para mais um 'certo'
        if (trueCount < 2) {
            for (let i = 0; i < condicoes.length; i++) {
                if (!condicoes[i]) { // Encontra a primeira posição falsa
                    condicoes[i] = true; 
                    break; 
                }
            }
        objeto.disabled = true;
        } else{
            //Caso estejam todas as condições atendidas reseta as condicoes e avança com a historia
            condicoes = [false,false];
            //avançar com a historia
        }
    }
}

window.onload = function(){
        fundo = document.getElementById("fundo_historia");
        console.log(fundo.style);
        //Parametros url 
        const urlParams = new URLSearchParams(window.location.search);

        //Bakcground
        switch(urlParams.get('historia')){
            case "praia":
                mudacenario("imagens_projeto/imagens_fundo/cenario1_praia.jpeg");
                break;
            case "natal":
                mudacenario("imagens_projeto/imagens_fundo/cenario1_natal.jpeg");
                break;
            case "escola":
                mudacenario("imagens_projeto/imagens_fundo/cenario1_escola.jpeg");
            break;
            case "aniversario":
                mudacenario("imagens_projeto/imagens_fundo/cenario1_aniversario.jpeg");
            break;
        }
        
}

//Caixa com a escolha
let selectedItems = [];

function toggleSelection(item) {
    // Selecionar ou desmarcar um alimento
    if (selectedItems.includes(item)) {
        selectedItems = selectedItems.filter(i => i !== item);
        item.classList.remove('selected');
    } else if (selectedItems.length < 2) {
        selectedItems.push(item);
        item.classList.add('selected');
    }

    // Atualizar estado do botão de confirmação
    document.getElementById('confirm-button').disabled = selectedItems.length < 2;
}

function confirmSelection() {
    if (selectedItems.length === 2) {
        alert("Selecionaste os itens: " +
            selectedItems.map(item => item.querySelector('p').innerText).join(", "));
        // Limpa a seleção
        selectedItems.forEach(item => item.classList.remove('selected'));
        selectedItems = [];
        document.getElementById('confirm-button').disabled = true;
    }
}






const alimentos = {
    praia: [
        { 
            id: 1, // Cenário 1
            certos: [
                "imagens_projeto/praia/cenario1/agua_coco.png",
                "imagens_projeto/praia/cenario1/agua.png",
                "imagens_projeto/praia/cenario1/banana.png",
                "imagens_projeto/praia/cenario1/maca.png",
                "imagens_projeto/praia/cenario1/sanduiche.png",
                "imagens_projeto/praia/cenario1/uvas.png",
            ],
            errados: [
                "imagens_projeto/praia/cenario1/bolacha_recheada.png",
                "imagens_projeto/praia/cenario1/churros.png",
                "imagens_projeto/praia/cenario1/refrigerante.png",
                "imagens_projeto/praia/cenario1/sumo_em_po.png",
            ]
        },
        { 
            id: 2, // Cenário 2
            certos: [
                "imagens_projeto/praia/cenario2/castanhas.png",
                "imagens_projeto/praia/cenario2/cenoura_baby.png",
                "imagens_projeto/praia/cenario2/pepino_palitos.png",
                "imagens_projeto/praia/cenario2/torrada.png",
            ],
            errados: [
                "imagens_projeto/praia/cenario2/algodao_doce.png",
                "imagens_projeto/praia/cenario2/gelado.png",
                "imagens_projeto/praia/cenario2/pipocas.png",
            ]
        },
        { 
            id: 3, // Cenário 3
            certos: [
                "imagens_projeto/praia/cenario3/arroz.png",
                "imagens_projeto/praia/cenario3/limonada.png",
                "imagens_projeto/praia/cenario3/peixe_grelhado.png",
                "imagens_projeto/praia/cenario3/salada.png",
            ],
            errados: [
                "imagens_projeto/praia/cenario3/fritas_palitos.png",
                "imagens_projeto/praia/cenario3/hamburger.png",
                "imagens_projeto/praia/cenario3/pizza.png",
            ]
        }
    ],
    natal: [
        { 
            id: 1, // Cenário 1
            certos: [
                "imagens_projeto/natal/cenario1/legumes_cozidos.png",
                "imagens_projeto/natal/cenario1/lentilhas.png",
                "imagens_projeto/natal/cenario1/nozes.png",
                "imagens_projeto/natal/cenario1/peru_assado.png",
            ],
            errados: [
                "imagens_projeto/natal/cenario1/pure_creme.png",
                "imagens_projeto/natal/cenario1/rolo_carne.png",
                "imagens_projeto/natal/cenario1/torta_carne.png",
            ]
        },
        { 
            id: 2, // Cenário 2
            certos: [
                "imagens_projeto/natal/cenario2/aletria.png",
                "imagens_projeto/natal/cenario2/gelatina_caseira.png",
                "imagens_projeto/natal/cenario2/salada_frutas.png",
            ],
            errados: [
                "imagens_projeto/natal/cenario2/chocolate_leite.png",
                "imagens_projeto/natal/cenario2/pudim.png",
                "imagens_projeto/natal/cenario2/torta_creme.png",
            ]
        },
        { 
            id: 3, // Cenário 3
            certos: [
                "imagens_projeto/natal/cenario3/bolachas_integrais.png",
                "imagens_projeto/natal/cenario3/cha.png",
                "imagens_projeto/natal/cenario3/uvas_passas.png",
            ],
            errados: [
                "imagens_projeto/natal/cenario3/chocolate_quente.png",
                "imagens_projeto/natal/cenario3/pretzel.png",
                "imagens_projeto/natal/cenario3/waffle_chocolate.png",
            ]
        }
    ],
    escola: [
        { 
            id: 1, // Cenário 1
            certos: [
                "imagens_projeto/escola/cenario1/iogurte.png",
                "imagens_projeto/escola/cenario1/leite_simples.png",
                "imagens_projeto/escola/cenario1/sumo_laranja.png",
            ],
            errados: [
                "imagens_projeto/escola/cenario1/croissant_chocolate.png",
                "imagens_projeto/escola/cenario1/donuts.png",
                "imagens_projeto/escola/cenario1/fatias_bolo.png",
                "imagens_projeto/escola/cenario1/leite_achocolatado.png",
            ]
        },
        { 
            id: 2, // Cenário 2
            certos: [
                "imagens_projeto/escola/cenario2/barra_cereais.png",
                "imagens_projeto/escola/cenario2/melancia.png",
                "imagens_projeto/escola/cenario2/morango.png",
                "imagens_projeto/escola/cenario2/sumo_maca.png",
            ],
            errados: [
                "imagens_projeto/escola/cenario2/batata_frita_pacote.png",
                "imagens_projeto/escola/cenario2/coca-cola.png",
                "imagens_projeto/escola/cenario2/panquecas.png",
                "imagens_projeto/escola/cenario2/rebucados.png",
            ]
        },
        { 
            id: 3, // Cenário 3
            certos: [
                "imagens_projeto/escola/cenario3/esparguete.png",
                "imagens_projeto/escola/cenario3/feijao_preto.png",
                "imagens_projeto/escola/cenario3/grao_de_bico.png",
                "imagens_projeto/escola/cenario3/sopa_legumes.png",
                "imagens_projeto/escola/cenario3/sumo_morango.png",
            ],
            errados: [
                "imagens_projeto/escola/cenario3/cachorro_quente.png",
                "imagens_projeto/escola/cenario3/lasanha.png",
                "imagens_projeto/escola/cenario3/milkshake.png",
                "imagens_projeto/escola/cenario3/nuggets.png",
            ]
        }
    ],
    aniversario: [
        { 
            id: 1, // Cenário 1
            certos: [
                "imagens_projeto/aniversario/cenario1/espeto_frutas.png",
                "imagens_projeto/aniversario/cenario1/ovo_cozido.png",
                "imagens_projeto/aniversario/cenario1/sandes_queijo.png",
            ],
            errados: [
                "imagens_projeto/aniversario/cenario1/bolas_queijo.png",
                "imagens_projeto/aniversario/cenario1/coxinha.png",
                "imagens_projeto/aniversario/cenario1/quiche.png",
            ]
        },
        { 
            id: 2, // Cenário 2
            certos: [
                "imagens_projeto/aniversario/cenario2/cupcake_mirtilo.png",
                "imagens_projeto/aniversario/cenario2/rodelas_ananas.png",
                "imagens_projeto/aniversario/cenario2/tosta_kiwi.png",
            ],
            errados: [
                "imagens_projeto/aniversario/cenario2/brigadeiro.png",
                "imagens_projeto/aniversario/cenario2/chupa_chupa.png",
                "imagens_projeto/aniversario/cenario2/gomas.png",
            ]
        },
        { 
            id: 3, // Cenário 3
            certos: [
                "imagens_projeto/aniversario/cenario3/bolo_simples.png",
                "imagens_projeto/aniversario/cenario3/sumo_melancia.png",
                "imagens_projeto/aniversario/cenario3/tarte_maca.png",
            ],
            errados: [
                "imagens_projeto/aniversario/cenario3/bolo_recheado.png",
                "imagens_projeto/aniversario/cenario3/gelado_caixa.png",
                "imagens_projeto/aniversario/cenario3/pintarolas.png",
            ]
        }
    ]
};

