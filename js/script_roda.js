
function handleSliceClick(section, color, text, audioFile) {
    // Alterar a cor de fundo da página
    document.body.style.backgroundColor = color;

    // Atualizar título e texto
    document.getElementById('sectionTitle').textContent = `Você clicou em: ${section}`;
    document.getElementById('sectionText').textContent = text;

    // Atualizar e reproduzir áudio
    const audio = document.getElementById('sectionAudio');
    audio.src = audioFile;
    audio.play();
}
// Configurar imagens de fundo para cada fatia
document.getElementById('sliceWater').style.backgroundImage = "url('imagens_menus/agua.jpg')";
document.getElementById('slice1').style.backgroundImage = "url('imagens_menus/cenario1_aniversario.jpeg')";
document.getElementById('slice2').style.backgroundImage = "url('imagens_menus/cenario1_aniversario.jpeg.')";
document.getElementById('slice3').style.backgroundImage = "url('imagens_menus/cenario1_aniversario.jpeg')";
document.getElementById('slice4').style.backgroundImage = "url('imagens_menus/cenario1_aniversario.jpeg')";
document.getElementById('slice5').style.backgroundImage = "url('imagens_menus/cenario1_aniversario.jpeg')";
document.getElementById('slice6').style.backgroundImage = "url('imagens_menus/cenario1_aniversario.jpeg')";
document.getElementById('slice7').style.backgroundImage = "url('imagens_menus/cenario1_aniversario.jpeg')";
// Configurar cliques nas fatias
document.getElementById('sliceWater').onclick = () => handleSliceClick('Água', '#1E90FF', 'Água é essencial para a vida. Beba bastante!', 'frutas.mp3');
document.getElementById('slice1').onclick = () => handleSliceClick('Cereais e Derivados', '#FFD700', 'Cereais são fontes importantes de energia.', 'frutas.mp3');
document.getElementById('slice2').onclick = () => handleSliceClick('Cereais e derivados, tubérculos', '#228B22', 'Tubérculos são ricos em carboidratos e fibras.', 'frutas.mp3');
document.getElementById('slice3').onclick = () => handleSliceClick('', '#FF6347', 'Hortícolas são ricos em vitaminas e minerais.', 'frutas.mp3');
document.getElementById('slice4').onclick = () => handleSliceClick('Fruta', '#FF4500', 'Frutas são essenciais para uma dieta equilibrada.', 'frutas.mp3');
document.getElementById('slice5').onclick = () => handleSliceClick('Lacticínios', '#D3D3D3', 'Lacticínios são fontes de cálcio e proteína.', 'frutas.mp3');
document.getElementById('slice6').onclick = () => handleSliceClick('Carnes, Pescado e Ovos', '#8B4513', 'Carnes, pescado e ovos são fontes de proteína.', 'frutas.mp3');
document.getElementById('slice7').onclick = () => handleSliceClick('Leguminosas', '#8A2BE2', 'Leguminosas são boas fontes de proteína vegetal.', 'frutas.mp3');



