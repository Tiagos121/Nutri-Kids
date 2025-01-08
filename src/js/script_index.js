
// Função para redirecionar para outra página
function goToPage(page) {
    window.location.href = page;
}

// Iniciar o áudio quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    // Configuração dos botões
    const miniJogoButton = document.getElementById('mini-jogo');
    const rodaAlimentosButton = document.getElementById('roda-alimentos');

    // Define os eventos de clique
    miniJogoButton.onclick = function () {

        goToPage('jogo.html');
    };

    rodaAlimentosButton.onclick = function () {
        goToPage('roda_alimentos.html');
    };

    // Criar e carregar o áudio via JavaScript
    const audio = new Audio('audio/musica.mp3'); // Substitua pelo seu arquivo de áudio
    audio.loop = true;  // Faz o áudio repetir em loop

    // Criar o botão de mudo e a imagem
    const muteButton = document.createElement('button');
    muteButton.classList.add('mute-button'); // Adiciona a classe do botão

    // Criar a imagem do botão
    const muteIcon = document.createElement('img');
    muteIcon.id = 'mute-icon'; // Define o id da imagem
    muteIcon.src = 'imagens_menus/speaker.png'; // Imagem inicial para som ligado
    muteButton.appendChild(muteIcon); // Adiciona a imagem ao botão

    // Adicionar o botão à página (canto superior direito)
    document.body.appendChild(muteButton);

    // Função para alternar entre mudo e som
    function toggleMute() {
        if (audio.muted) {
            audio.muted = false; // Ativa o som
            muteIcon.src = 'imagens_menus/speaker.png'; // Altera para a imagem de som ligado
            muteIcon.alt = 'Som Ativo'; // Altera o texto alternativo da imagem
        } else {
            audio.muted = true; // Desativa o som
            muteIcon.src = 'imagens_menus/mute.png'; // Altera para a imagem de som desligado
            muteIcon.alt = 'Som Mudo'; // Altera o texto alternativo da imagem
        }
    }

    // Adicionar o evento de clique ao botão
    muteButton.onclick = function () {
        toggleMute();
    };

    // Inicia o áudio apenas após a interação do usuário
    document.addEventListener('click', () => {
        if (!audio.playing) {
            audio.play().catch((error) => {
                console.error('Erro ao reproduzir o áudio:', error);
            });
        }
    }, { once: true }); // Garante que o áudio comece apenas no primeiro clique
});
