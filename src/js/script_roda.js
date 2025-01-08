
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
document.getElementById('slice1').style.backgroundImage = "url('imagens_menus/oleos.jpg')";
document.getElementById('slice2').style.backgroundImage = "url('imagens_menus/hidratos.jpeg.')";
document.getElementById('slice3').style.backgroundImage = "url('imagens_menus/frutas.jpg')";
document.getElementById('slice4').style.backgroundImage = "url('imagens_menus/lacticinios.jpg')";
document.getElementById('slice5').style.backgroundImage = "url('imagens_menus/carnes.jpg')";
document.getElementById('slice6').style.backgroundImage = "url('imagens_menus/leguminosas.jpg')";
document.getElementById('slice7').style.backgroundImage = "url('imagens_menus/vegetais.jpg')";
// Configurar cliques nas fatias
document.getElementById('sliceWater').onclick = () => handleSliceClick('Água', '#1E90FF', 'Água é essencial para a vida. Beba bastante!', 'audio/agua.mp3');
document.getElementById('slice3').onclick = () => handleSliceClick('Frutas', '#FF6347', 'Frutas são essenciais para uma dieta equilibrada.', 'audio/frutas.mp3');
document.getElementById('slice5').onclick = () => handleSliceClick('Carnes, Pescado e Ovos', '#D3D3D3', 'Carnes, pescado e ovos são fontes de proteína.', 'audio/carne_ovos_e_peixe.mp3');
document.getElementById('slice6').onclick = () => handleSliceClick('Leguminosas', '#8B4513', 'Leguminosas são boas fontes de proteína vegetal.', 'audio/leguminosas.mp3');
document.getElementById('slice7').onclick = () => handleSliceClick('Hotículas', '#8A2BE2', 'Hortícolas são ricos em vitaminas e minerais.', 'audio/vegetais.mp3');
document.getElementById('slice1').onclick = () => handleSliceClick('Óleos e Gorduras', '#FFD700', 'Óleos e gorduras fornecem energia, mas devem ser consumidos com moderação.', 'audio/oleos_e_gorduras.mp3');
document.getElementById('slice2').onclick = () => handleSliceClick('Cereais e Derivados, Tubérculos', '#228B22', 'Cereais são fontes importantes de energia e fibras.', 'audio/cereisco.mp3');
document.getElementById('slice4').onclick = () => handleSliceClick('Lacticínios', '#FF4500', 'Lacticínios são ricos em cálcio, importante para os ossos.', 'audio/laticinios.mp3');






