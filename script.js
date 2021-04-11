const map = [
    "WWWWWWWWWWWWWWWWWWWWW", 
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const altura = 30;
const largura = 30;
let topdiv = 0;
let left = 0;
let cont = 0
let posicaoLinha = 9;
let posicaoColuna = 0;



var labirintoEl = document.getElementById("labirinto");

function criarPersonagem(){
    var inicio = document.getElementById("inicio");
    var personagemDiv = document.createElement("div");
    personagemDiv.id = "personagem"
    personagemDiv.style.backgroundImage = "url('assets/rato.png')";
    personagemDiv.style.backgroundRepeat = "no-repeat"
    personagemDiv.style.backgroundSize= "145%";
    personagemDiv.style.width = largura + "px";;
    personagemDiv.style.height = altura + "px";
    personagemDiv.style.backgroundPosition = "center";
    personagemDiv.style.marginTop = topdiv + "px";
    personagemDiv.style.marginLeft = left +"px";
    personagemDiv.position = "relative"
    inicio.appendChild(personagemDiv);
}

function labirinto(){
    for (let i = 0; i < map.length; i++){
        let aux = map[i]
        for (let j = 0 ; j < aux.length ; j++){
            if( aux[j] == "S"){

                var divInicial = document.createElement("div");
                divInicial.id = "inicio"
                divInicial.style.backgroundColor = "#121212"
                divInicial.style.width = largura + "px";;
                divInicial.style.height = altura + "px";

                labirintoEl.appendChild(divInicial)
                cont++
            }else if( aux[j] == "W"){

                var parede = document.createElement("div");
                parede.style.backgroundColor = "#bd93f9"
                parede.style.width = largura + "px";;
                parede.style.height = altura + "px";;
                labirintoEl.appendChild(parede)
                cont++
            }else if( aux[j] == " "){

                var caminho = document.createElement("div");
                caminho.style.backgroundColor = "#121212"
                caminho.style.width = largura + "px";
                caminho.style.height = altura + "px";
                labirintoEl.appendChild(caminho)
                cont++
            }else if (aux[j] == "F"){

                var final = document.createElement("div");
                final.id = "rato";
                final.style.backgroundImage = "url('assets/cheese-vector-icon-png_293618.png')";
                final.style.backgroundRepeat = "no-repeat"
                final.style.backgroundSize= "95%";
                final.style.backgroundPosition = "center";
                final.style.width = largura + "px";
                final.style.height = altura + "px";
                labirintoEl.appendChild(final)
                cont++
            }
        }        
    }

}

labirinto()
criarPersonagem()


function mover(linha,coluna){
    let permitir;
       if( map[linha][coluna] !="W" && map[linha][coluna] !=null){
           permitir =  true;
       }else{
           permitir =  false;  
       }
     return permitir;
}

function mensagemFinal(){
    if(map[posicaoLinha][posicaoColuna] == "F"){
        let labirintoEl = document.getElementById("labirinto");
        let modalFinal = document.createElement("div");
        let conteudo  = document.createTextNode("Parabéns, O Rato Pegou o Queijo!!");
        let button = document.createElement("button");
        button.onclick = function(){window.location.reload()}
        button.innerHTML="Jogar Novamente"
        modalFinal.className = "fimdejogo"
        modalFinal.appendChild(conteudo);
        modalFinal.appendChild(button);
        labirintoEl.appendChild(modalFinal)

    }


}


document.addEventListener("keydown", (event)=>{
    let keyName = event.key;
    let personagem = document.getElementById("personagem");

        if(keyName == "ArrowLeft"){

            posicaoColuna -= 1;
            if(mover(posicaoLinha,posicaoColuna) == true){
                personagem.style.marginLeft = (left-=30) + "px";
            }else{
                posicaoColuna += 1;
            }
              
        }else if(keyName == "ArrowRight"){

            posicaoColuna += 1;
            if(mover(posicaoLinha,posicaoColuna) == true){
                personagem.style.position = "relative";
                personagem.style.marginLeft = (left+=30) + "px";
            }else{
                posicaoColuna -= 1;
            }
              
        }
        if(keyName == "ArrowDown"){

            posicaoLinha += 1;
            if(mover(posicaoLinha,posicaoColuna) == true){
                personagem.style.marginTop = (topdiv+=30) + "px";
            }else{
                posicaoLinha -= 1;
            }
        
            
        }else if(keyName == "ArrowUp"){
            
            posicaoLinha -= 1;
            if(mover(posicaoLinha,posicaoColuna) == true){
                personagem.style.marginTop = (topdiv-=30) + "px";
            }else{
                posicaoLinha += 1;
            }
        }   
        mensagemFinal()
    
})