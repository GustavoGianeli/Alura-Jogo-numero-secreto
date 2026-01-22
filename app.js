//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Bem vindo ao jogo do numero secreto';


//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Chuta um numero entre 0 e 100';

// vou deixar comentado para que eu possa lembrar q precisar buscar no html


let nome = prompt('Qual o seu nome meu Caro(a)?');
 alert('Bem vindo ao jogo do numero secreto, ' + nome + '!');

let numeroMaximo; 
let numeroSecreto;
let tentativas;

 function dificuldadeJogo(){
    let dificuldade = prompt('Escolha a dificuldade: 1 - Fácil, 2 - Médio, 3 - Difícil');
    alert('Você escolheu a dificuldade ' + (dificuldade == 1? 'Fácil' : dificuldade == 2? 'Médio' : 'Difícil'));
     numeroMaximo =dificuldade == 1 ? 10 : dificuldade == 2? 100 : 1000;
}




function exibirTextoNaTela(tag, texto) {
    let campo =document.querySelector(tag);
    campo.innerHTML = texto ;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female");
}



exibirTextoNaTela('h1','Bem vindo ao jogo do numero secreto');
exibirTextoNaTela('p',`Chuta um numero entre 0 e ${numeroMaximo}`);

function mensagemInicial () {
    dificuldadeJogo();
    numeroSecreto = gerarNumeroAleatorio();
    //console.log('numero secreto', numeroSecreto);
    tentativas = 1; 
    exibirTextoNaTela('h1','Bem vindo ao jogo do numero secreto');
    exibirTextoNaTela('p',`Chuta um numero entre 0 e ${numeroMaximo}`);
}




function gerarNumeroAleatorio() {
   return parseInt(Math.random() * numeroMaximo + 1);

}

function verificarChute() {
    let  chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        if (tentativas == 1) {
            exibirTextoNaTela('h1', `Parabéns! ${nome}  Você acertou o número secreto na primeira tentativa!`);
            exibirTextoNaTela('p',`O número secreto era ` + numeroSecreto + `, jogue na mega sena ! :)`);

        }else{
        exibirTextoNaTela('h1', `Parabéns!  ${nome}  Você acertou o número secreto!, em ${tentativas} tentativas.`);
        exibirTextoNaTela('p', 'O número secreto era ' + numeroSecreto);
        
        }
document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('h1', 'Voce errou, tente de novo!');
        exibirTextoNaTela('p', 'O numero secreto é menor que ' + chute);
} else {
        exibirTextoNaTela('h1', 'Voce errou, tente de novo!');
        exibirTextoNaTela('p', 'O numero secreto é maior que ' + chute);
    }
tentativas++;
limparCampo();
}



function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    limparCampo();
    mensagemInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
mensagemInicial (); 