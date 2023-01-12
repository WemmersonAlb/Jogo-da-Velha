import tabuleiro from './tabuleiro.js';
import marcarCasas from './marcarCasas.js';


const enviar = document.querySelector('#enviar');
const input = document.querySelectorAll(".formulario1>input[type='radio']");



enviar.addEventListener('click', ()=>{
    const mensagem = document.querySelector('#mensagem');

    const divTabuleiro = document.querySelector('#tabuleiro');
    divTabuleiro.style = 'display:flex;';

    tabuleiro();

    const placar = document.querySelector('#placar');
    placar.style = 'display:flex;';

    const botoes = document.querySelector('#botoes');
    botoes.style = 'display:flex;';

    const form = document.querySelector('form');
    form.style = 'display:none;';

    let jogador1 = document.createElement('p');
    jogador1.setAttribute('id', 'jogador1');
    document.body.appendChild(jogador1);

    if(input[0].checked){
        jogador1.setAttribute('class', 'usax');
        mensagem.innerHTML = 'É a vez do Xis!!!'
    }else{
        jogador1.setAttribute('class', 'usao');
        mensagem.innerHTML = 'É a vez da Bola!!!'
    }
    
    marcarCasas();

   

});
