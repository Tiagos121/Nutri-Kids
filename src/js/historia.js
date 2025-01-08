
var fundo;
var audioPop;
var audioBackground = new Audio("");
let lastClickedButton = null; 
let cenario = 0;
let fundos_historia;
let cenario_props;
let pontuacao = 0;

//Condicoes cenario
let condicoes = [false,false];
//Muda cenario
function mudacenario(pathCenario,fundo){
    fundo.src = pathCenario;
    
// Cria um novo listener com o array atualizado
condicoes = criarListener(fundos_historia, (novoArray) => {
    console.log("Callback executado! Condições agora são:", novoArray);
});

document.getElementById("img-posi-esquerda").querySelector("img").src = cenario_props[cenario][0];
document.getElementById("img-posi-direita").querySelector("img").src = cenario_props[cenario][1];


}

// Função para criar o listener
function criarListener(array, callback) {
    condicoes = [false, false]; // Reset do array condicoes para um novo cenário

    return new Proxy(condicoes, {
        set(target, property, value) {
            target[property] = value; // Atualiza o valor no array original

            console.log(`condicoes[${property}] mudou para: ${value}`);

            // Verifica se o array "condicoes" está completamente true
            if (target.every(condicao => condicao === true)) {
                cenario = cenario + 1;
                // Verifica o cenário atual e loga o elemento correspondente do array
                if (cenario >= 0 && cenario < array.length) {
                    console.log(`Elemento do array correspondente ao cenário ${cenario}:`, array[cenario]);
                    mudacenario(array[cenario],document.getElementById("fundo_historia"));
                } else {
                    console.log("Cenário inválido ou fora dos limites do array.");
                }

                // Executa o callback, se fornecido
                if (callback) callback(target);
            }

            return true; 
        }
    });
}

function verificaAcao (objeto,alimento){ //Recebe objeto clicado para confirmar se corresponde a uma ação correta || Exemplo de atributos de objeto clicavel : valor=certo/errado
    if(objeto.getAttribute("valor") == "certo"){
        console.log("Objeto tem valor 'certo'");
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
        } 
    }
    console.log("Array condicoes : " +  condicoes);
}

window.onload = function(){

    
        
        fundo = document.getElementById("fundo_historia");
        console.log(fundo.style);
        //Parametros url 
        const urlParams = new URLSearchParams(window.location.search);

        //Bakcground
        switch(urlParams.get('historia')){
            case "praia":
                mudacenario("../imagens_projeto/imagens_fundo/cenario1_praia.jpeg");
                break;
            case "natal":
                mudacenario("../imagens_projeto/imagens_fundo/cenario1_natal.jpeg");
                break;
            case "escola":
                mudacenario("../imagens_projeto/imagens_fundo/cenario1_escola.jpeg");
            break;
            case "aniversario":
                mudacenario("../imagens_projeto/imagens_fundo/cenario1_aniversario.jpeg");
            break;
        }   
}


function loadPersonagem (){
            // Pega o caminho da imagem armazenado no localStorage
const caminhoImagem = localStorage.getItem("personagem");

if (caminhoImagem) {
    // Define o caminho completo para a imagem
    const caminhoCompleto = "../" + caminhoImagem;  // Ou use a raiz se necessário

    // Atribui o caminho ao src da imagem
    document.getElementById("personagemFoteira").src = caminhoCompleto;
}
}

function verificaPontos(itensSelecionados) {
    let comidasAcertadas = JSON.parse(localStorage.getItem("comidasAcertadas")) || [];
    itensSelecionados.forEach((objeto) => {
        const alimento = objeto.getAttribute("valor") === "certo"; // Verifica se é um alimento certo
        if (alimento) {
            pontuacao += 10; // Incrementa pontuação
            console.log("Pontuação atual:", pontuacao);

            // Adiciona o alimento ao array de comidas acertadas
            const alimentoImg = objeto.querySelector("img").src; // Obtém o caminho da imagem do alimento
            if (!comidasAcertadas.includes(alimentoImg)) {
                comidasAcertadas.push(alimentoImg);
            }
        }
    });
    // Salva o array atualizado no localStorage
    localStorage.setItem("comidasAcertadas", JSON.stringify(comidasAcertadas));
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
        document.getElementById("caixa").style.display = "none";

        const audio = new Audio('../audio/somclick.mp3');
        audio.play();

        if (audioBackground) {
            audioBackground.play();
        }

        // Reativa o botão oposto ao último clicado
        if (lastClickedButton === "esquerda") {
            document.getElementById("img-posi-direita").disabled = false;
            verificaAcao(document.getElementById("img-posi-esquerda"),false);
        } else if (lastClickedButton === "direita") {
            document.getElementById("img-posi-esquerda").disabled = false;
            verificaAcao(document.getElementById("img-posi-direita"),false);
        }

        // Verifica a pontuação com base nos itens selecionados
        verificaPontos(selectedItems);
        document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao}`;
        if (cenario === 3) {
            localStorage.setItem("pontuacaoFinal", pontuacao);
            window.location.href = "../pontuacao.html";
        }

        // Limpa a seleção
        selectedItems.forEach(item => item.classList.remove('selected'));
        selectedItems = [];

        document.getElementById('confirm-button').disabled = true;
    }
}


