
function showCharacterSelection() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('character-selection').style.display = 'block';
}

function showMapSelection(characterName) {
    document.getElementById('character-selection').style.display = 'none';
    document.getElementById('map-selection').style.display = 'block';


}


function navigateTo(page) {
    audioJogo.play();
    window.location.href = page;
}

//COOKIES
//Set cookie
function setCookie(name,value,days) { // Exemplo de uso: setCookie("utilizador", "Joao", 7); // Cria um cookie chamado "utilizador" com valor "Joao" que expira em 7 dias
document.cookie = name + "=" + (value || "");
}
//Get cookie
function getCookie(name) { // Exemplo de uso: const utilizador = getCookie("utilizador"); // Retorna o valor do cookie "utilizador"
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
//Earese cookie
function eraseCookie(name) {   // Exemplo de uso: eraseCookie("utilizador");  // Apaga a cookie "utilizador"
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}



document.addEventListener("DOMContentLoaded", () => {
    
    localStorage.clear();
    const startButton = document.getElementById("start-button");
    const characterSelection = document.getElementById("character-selection");
    const startScreen = document.getElementById("start-screen");
    const mapSelection = document.getElementById("map-selection");
    const selectedCharacterName = document.getElementById("selected-character-name");
    const selectedCharacterImg = document.getElementById("selected-character-img");
    const characterButtons = document.querySelectorAll(".character-button");
    const mapButtons = document.querySelectorAll(".map-button");

    // Show character selection screen
    document.getElementById("start-button").onclick= function(){
        document.getElementById("start-screen").style.display = "none";
        document.getElementById("character-selection").style.display = "block";
        document.getElementById("body3").style.backgroundImage = "none";
        document.getElementById("missaoSaborosa").innerHTML = "";
    }

// Add event listeners to character buttons
document.getElementById("carlos").onclick = () => {
    showMapSelection();
    document.getElementById("carlos").style.display = "block"; // Personagem 1
    const cImageSrc = document.getElementById("carlos").querySelector("img").src;
    const relativeSrcCarlos = cImageSrc.substring(cImageSrc.lastIndexOf("/imagens_menus/") + 1); // Extrai o caminho relativo
    localStorage.setItem("personagem", relativeSrcCarlos);

    document.getElementById("mapSelection").style.display = "flex";
};

document.getElementById("mariana").onclick = () => {
    showMapSelection();
    document.getElementById("mariana").style.display = "flex"; // Personagem 2
    const mImageSrc = document.getElementById("mariana").querySelector("img").src;
    const relativeSrcMariana = mImageSrc.substring(mImageSrc.lastIndexOf("/imagens_menus/") + 1); // Extrai o caminho relativo
    localStorage.setItem("personagem", relativeSrcMariana);

    document.getElementById("mapSelection").style.display = "flex";
};




    // Add event listeners to map buttons
    mapButtons.forEach(button => {
        button.addEventListener("click", () => {
            const mapLink = button.dataset.map;
            window.location.href = mapLink;
        });
    });
});
