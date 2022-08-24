let nome;
let idade;
let linguagem;
let botao = document.querySelector(".botao-um");

let segundaSecao =  document.querySelector(".resposta");
let primeiraSecao = document.querySelector("main form");

function pegaInformacao(event){
    event.preventDefault();
    nome = document.querySelector("#nome").value;
    idade = document.querySelector("#idade").value;
    linguagem = document.querySelector("#linguagem").value;    
    primeiraSecao.classList.add("resposta");
    segundaSecao.classList.add("resposta-aparece");
    segundaSecao.classList.remove("resposta");
    segundaSecao.innerHTML = `<p>Olá, ${nome}! Você tem ${idade} anos e está estudando ${linguagem}.</p>`;
    segundaSecao.innerHTML += `<form>
         <p>Está gostando de ${linguagem}?</p>
         <input type="radio" id="sim" name="gosta_da_linguagem" value="sim"/>
         <label for="sim">Sim</label>
         <input type="radio" id="nao" name="gosta_da_linguagem" value="nao"/>
         <label for="nao">Não</label>
         <button class="botao-dois">Enviar</button>
      </form>`;
    let botaoDois = document.querySelector(".botao-dois");    
    

    function segundaInformacao(event){
        event.preventDefault();
        let radioButtons = document.getElementsByName("gosta_da_linguagem");
        for(i=0; i< radioButtons.length; i++){
            if(radioButtons[i].checked){
                if(radioButtons[i].value === "sim"){
                    segundaSecao.innerHTML = `<p>Que bom que você está gostando</p>`
                } else{
                    segundaSecao.innerHTML = `<p>Você precisa conhecer os cursos da Alura</p>`
                }
            }
        }  
    }    
    botaoDois.onclick = segundaInformacao;  
}


botao.onclick = pegaInformacao;