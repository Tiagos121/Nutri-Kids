var fundo;
//Condicoes cenarios
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



